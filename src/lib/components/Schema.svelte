<script>
  import Enum from './Schema/Enum.svelte';
  import Ref from './Schema/Ref.svelte';
  import Constraint from './Schema/Constraint.svelte';
  import Examples from './Schema/Examples.svelte';
  import Range from './Schema/Range.svelte';
  import Format from './Schema/Format.svelte';
  import Items from './Schema/Items.svelte';
  import '@picocss/pico/css/pico.css';
  import SingleLineConstraint from './Schema/SingleLineConstraint.svelte';

  const { schema = {} } = $props();
  let href = 'TODO';

  function schemaName(url = '') {
    const draft = url.match(/draft-(\d\d)/);
    if (!draft) return url;

    return `v${draft[1]}`;
  }

  function schemaHas(keys) {
    if (typeof schema == 'boolean') return false;

    if (!Array.isArray(keys)) keys = [keys];
    for (const k of keys) {
      if (schema.hasOwnProperty(k)) return true;
    }
    return false;
  }
</script>

<article>
  {#if typeof schema == 'boolean'}
    <div>
      schema matches {#if schema}everything{:else}nothing{/if}
    </div>
  {:else}
    {#if schemaHas(['$id', '$schema', 'title'])}
      <header>
        <div class="top-section">
          <div>{schema.$id}</div>
          <div data-testid="metaschema">{schemaName(schema.$schema)}</div>
        </div>
        <h6>{schema.title}</h6>
        {#if schema.$anchor}
          <div class="anchor">#{schema.$anchor}</div>
        {/if}
      </header>
    {/if}

    {#if schema.description}
      <div class="description">{schema.description}</div>
    {/if}

    {#if schema.$comment}
      <blockquote class="comment">{schema.$comment}</blockquote>
    {/if}

    <div>
      {#each ['writeOnly', 'readOnly'] as key}
        {#if schema[key]}
          <div class="writeOnly">{key}</div>
        {/if}
      {/each}

      {#if schema.type}
        <Constraint label="type">{schema.type}</Constraint>
      {/if}

      {#if schema.format}
        <SingleLineConstraint>
          <Format {schema} />
        </SingleLineConstraint>
      {/if}

      <SingleLineConstraint>
        {#if schema.contentEncoding}
          <li class="content">encoding: {schema.contentEncoding}</li>
        {/if}

        {#if schema.contentMediaType}
          <li class="content">media type: {schema.contentMediaType}</li>
        {/if}
      </SingleLineConstraint>

      {#if schema.minLength || schema.maxLength}
        <SingleLineConstraint>
          <Range min={schema.minLength} max={schema.maxLength} exclusive={schema.exclusive} />
        </SingleLineConstraint>
      {/if}

      {#if schemaHas(['minimum', 'maximum', 'multipleOf'])}
        <SingleLineConstraint>
          <Range min={schema.minimum} max={schema.maximum} exclusive={schema.exclusive} />

          {#if 'multipleOf' in schema}
            <li>&times;{schema.multipleOf}</li>
          {/if}
        </SingleLineConstraint>
      {/if}

      {#if schemaHas('required')}
        <SingleLineConstraint label="required">
          {#each schema.required as required}
            <li><code>{required}</code></li>
          {/each}
        </SingleLineConstraint>
      {/if}

      {#if schemaHas(['minProperties', 'maxProperties'])}
        <SingleLineConstraint label="nbr properties">
          <Range min={schema.minProperties} max={schema.maxProperties} />
        </SingleLineConstraint>
      {/if}

      <SingleLineConstraint>
        {#if schemaHas(['maxItems', 'minItems'])}
          <li>items: {schema.minItems || ''}...{schema.maxItems || ''}</li>
        {/if}

        {#if schemaHas(['maxContains', 'minContains'])}
          <li>contains: {schema.minContains || ''}...{schema.maxContains || ''}</li>
        {/if}

        {#if schema.uniqueItems}
          <li>unique</li>
        {/if}
        {#if schemaHas('additionalItems')}
          <li>additional items {schema.additionalItems ? '' : 'not'} allowed</li>
        {/if}
      </SingleLineConstraint>

      {#if schema.$ref}
        <Ref {schema} />
      {/if}
      {#if schema.enum}
        <Enum {schema} {href} />
      {/if}
      {#if schema.const}
        <Constraint label="const"><pre>{JSON.stringify(schema.const)}</pre></Constraint>
      {/if}

      {#if schemaHas('items')}
        <Items items={schema.items} />
      {/if}

      {#if schemaHas('properties')}
        <!--        <Properties properties={schema.properties} />-->
      {/if}

      {#if schemaHas('default')}
        <Constraint label="default">
          <pre>{JSON.stringify(schema.default, null, 2)}</pre>
        </Constraint>
      {/if}
      {#if schema.examples}
        <Examples {schema} />
      {/if}
    </div>
  {/if}
</article>

<style>
  h6 {
    margin-bottom: 0px;
    flex: 1;
  }
  blockquote {
    font-style: italic;
  }
  .anchor {
    font-size: small;
  }
  header {
    display: flex;
    flex-wrap: wrap;
  }
  .top-section {
    display: flex;
    justify-content: space-between;
    font-size: small;
    width: 100%;
  }
  .writeOnly {
    font-variant: small-caps;
  }
  .content {
    font-style: italic;
  }
</style>
