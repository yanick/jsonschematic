<script>
  import Enum from './Schema/Enum.svelte';
  import Ref from './Schema/Ref.svelte';
  import Constraint from './Schema/Constraint.svelte';
  import Examples from './Schema/Examples.svelte';
  import Range from './Schema/Range.svelte';
  import Format from './Schema/Format.svelte';
  import '@picocss/pico/css/pico.css';
  import SingleLineConstraint from './Schema/SingleLineConstraint.svelte';

  const { schema = {} } = $props();
  let href = 'TODO';

  function schemaName(url = '') {
    const draft = url.match(/draft-(\d\d)/);
    if (!draft) return url;

    return `v${draft[1]}`;
  }
</script>

<article>
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
        <Range {schema} />
      </SingleLineConstraint>
    {/if}

    {#if schema.$ref}
      <Ref {schema} />
    {/if}
    {#if schema.enum}
      <Enum {schema} {href} />
    {/if}
    {#if schema.const}
      <Constraint label="const"><pre>{JSON.stringify(schema.const)}</pre></Constraint>
    {/if}
    {#if schema.examples}
      <Examples {schema} />
    {/if}
  </div>
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
