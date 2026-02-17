<script>
  import '@picocss/pico/css/pico.css';

  import SingleLineConstraint from './Schema/SingleLineConstraint.svelte';

  import Icon from './Icon.svelte';
  import Enum from './Schema/Enum.svelte';
  import Ref from './Schema/Ref.svelte';
  import Constraint from './Schema/Constraint.svelte';
  import Examples from './Schema/Examples.svelte';
  import Range from './Schema/Range.svelte';
  import Format from './Schema/Format.svelte';
  import Items from './Schema/Items.svelte';
  import If from './Schema/If.svelte';
  import SomeOf from './Schema/SomeOf.svelte';
  import Schema from './Schema.svelte';
  import Properties from './Schema/Properties.svelte';
  import Dependencies from './Schema/Dependencies.svelte';
  import Markdown from 'svelte-markdown';

  const { schema = {}, notitle = false } = $props();
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

  let showCode = $state(false);
  const toggleCode = () => (showCode = !showCode);
</script>

<article>
  {#if typeof schema == 'boolean'}
    <div>
      schema matches {#if schema}everything{:else}nothing{/if}
    </div>
  {:else}
    {#if !notitle && schemaHas(['$id', '$schema', 'title'])}
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
      <div class="description">
        <Markdown source={schema.description} />
      </div>
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
        <SingleLineConstraint>
          {#snippet title()}
            <h6>
              <Icon icon="label_important" />{(Array.isArray(schema.type)
                ? schema.type
                : [schema.type]
              ).join(', ')}
            </h6>
          {/snippet}
          {#if schema.uniqueItems}
            <li>unique</li>
          {/if}
          {#if schemaHas('additionalItems')}
            <li>additional items {schema.additionalItems ? '' : 'not'} allowed</li>
          {/if}
        </SingleLineConstraint>
      {/if}

      {#if schemaHas('propertyNames')}
        <Constraint label="property names">
          <Schema schema={schema.propertyNames} />
        </Constraint>
      {/if}

      {#if schemaHas('pattern')}
        <SingleLineConstraint>
          <li>
            value matches pattern <code>{schema.pattern}</code>
          </li>
        </SingleLineConstraint>
      {/if}

      {#if schemaHas('properties')}
        <Properties properties={schema.properties} required={schema.required} />
      {/if}

      {#if schemaHas('patternProperties')}
        <Properties properties={schema.patternProperties} label="pattern properties" />
      {/if}

      {#if schemaHas('dependencies')}
        <Dependencies dependencies={schema.dependencies} />
      {/if}

      {#each ['allOf', 'anyOf', 'oneOf'] as type (type)}
        {#if schemaHas(type)}
          <SomeOf {type} alternatives={schema[type]} />
        {/if}
      {/each}

      {#if schemaHas('not')}
        <Constraint label="not"><Schema schema={schema.not} /></Constraint>
      {/if}

      {#if schemaHas('if')}
        <If {schema} />
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

      {#if schemaHas(['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum', 'multipleOf'])}
        <SingleLineConstraint>
          {#if 'minimum' in schema}
            <li>&ge; {schema.minimum}</li>
          {/if}
          {#if 'exclusiveMinimum' in schema}
            <li>&gt; {schema.minimum}</li>
          {/if}
          {#if 'maximum' in schema}
            <li>&le; {schema.maximum}</li>
          {/if}
          {#if 'exclusivemaximum' in schema}
            <li>&lt; {schema.maximum}</li>
          {/if}

          {#if 'multipleOf' in schema}
            <li>&times;{schema.multipleOf}</li>
          {/if}
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
      </SingleLineConstraint>

      {#if schema.$ref}
        <Ref {schema} />
      {/if}
      {#if schema.enum}
        <Enum {schema} />
      {/if}
      {#if schema.const}
        <Constraint label="const"><pre>{JSON.stringify(schema.const)}</pre></Constraint>
      {/if}

      {#if schemaHas('items')}
        <Items items={schema.items} />
      {/if}

      {#if schemaHas('additionalItems')}
        <Constraint label="additional items">
          {#if typeof schema.additionalItems == 'boolean'}
            <div>
              additional items {#if !schema.additionalItems}not{/if} allowed
            </div>
          {:else}
            <Schema schema={schema.additionalItems} />
          {/if}
        </Constraint>
      {/if}

      {#if schemaHas('additionalProperties')}
        <Constraint label="additional properties">
          {#if typeof schema.additionalProperties == 'boolean'}
            <div>
              additional properties {#if !schema.additionalProperties}not{/if} allowed
            </div>
          {:else}
            <Schema schema={schema.additionalProperties} />
          {/if}
        </Constraint>
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
    <footer>
      <Constraint label="source" details>
        <pre>{JSON.stringify(schema, null, 2)}</pre>
      </Constraint>
    </footer>
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
  h6 {
    display: flex;
    align-items: center;
  }
  h6 :global(.icon) {
    margin-right: 0.5em;
  }
</style>
