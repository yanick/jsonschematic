<div class="instance" class:top_level>
  <div class="top_section">
    {#if id}
      <div class="instance_href">{id}</div>
    {/if}

    {#if schema}
      <div class="schema">
        <a href="{schema}">{schema_name(schema)}</a>
      </div>
    {/if}
  </div>

  {#if title}
    <h1 class="title">{title}</h1>
  {/if}

  {#if description}
    <div class="description">{description}</div>
  {/if}

  {#if default_value !== undefined}
    <div class="label">default</div>
    <pre>
      <code>{JSON.stringify(default_value, null, 2)}</code>
    </pre>
  {/if}

  {#if ref}
    <div>extends</div>
    <div>
      <a href="{'#' + relative_ref(ref)}">{ref}</a>

      {#if is_expanded_ref}
        <input on:click="{remove_ref}" type="button" value="unexpand" />
      {:else}
        <input
          on:click="{fetch_ref}"
          disabled="{loading_ref}"
          type="button"
          value="{loading_ref ? 'fetching...' : 'expand'}" />
      {/if}
    </div>
  {/if}

  {#if enumeration}
    <Enum {enumeration} {href} />
  {/if}

  {#if constant}
    <Enum enumeration="{[constant]}" constant {href} />
  {/if}

  <Types href="{id}" {types} definition="{expanded_def}" />

  {#if examples}
    <Examples {examples} {href} />
  {/if}

</div>

<script>
  import * as store from "../../routes/_schemas";

  export let definition = {};
  export let href;
  export let fetch_segment = store.fetch_segment;
  export let top_level = false;

  import Types from "./Types/index.svelte";
  import Items from "./Items/index.svelte";
  import Examples from "./Examples/index.svelte";
  import Enum from "./Enum/index.svelte";
  import Properties from "./Properties/index.svelte";

  let schema,
    types,
    items,
    ref,
    title,
    id,
    description,
    properties,
    examples,
    enumeration,
    constant,
    default_value;
  let expanded_ref = {};
  let loading_ref = false;
  let is_expanded_ref = false;

  let expanded_def = definition;

  $: {
    expanded_def = { ...expanded_ref, ...definition };

    ({
      default: default_value,
      $id: id,
      description,
      title,
      $schema: schema,
      type: types,
      items,
      examples,
      $ref: ref,
      enum: enumeration,
      const: constant,
      properties,
    } = expanded_def);

    // always pass an array, to make it easier
    if (!Array.isArray(types)) {
      types = [types];
    }
  }

  $: if (!id) id = href || "";
  $: if (id && -1 === id.indexOf("#")) id = id + "#";

  const fetch_ref = async () => {
    loading_ref = true;

    const def = await fetch_segment(ref, href);

    is_expanded_ref = true;
    expanded_ref = def;
  };

  const remove_ref = async () => {
    loading_ref = false;
    expanded_ref = {};
    is_expanded_ref = false;
  };

  function schema_name(url) {
    const draft = url.match(/draft-(\d\d)/);
    if (!draft) return url;

    return `v${draft[1]}`;
  }

  function relative_ref(ref) {
    if (ref.indexOf("#") === 0) {
      return id.replace(/#.*/, "") + ref;
    }

    return ref;
  }
</script>

<style>
  .instance {
    display: grid;
    grid-template-columns: 1fr 100fr;
    align-items: first baseline;
    grid-column-gap: 1em;
    margin-bottom: 1em;
  }

  .instance > :global(.type) {
    grid-column: 1;
  }

  .instance > :global(.type_restraints) {
    grid-column: 2;
  }

  .top_level > .top_section {
    display: flex;
  }

  .top_section {
    display: none;
    grid-column: span 2;
  }

  .description {
    grid-column: span 2;
  }

  .title {
    grid-column: span 2;
    color: var(--color-blue);
    font-size: var(--font-scale-10);
  }

  .top_level > .title {
    font-size: var(--font-scale-14);
  }

  .instance_href {
    font-style: italic;
  }

  .top_section div {
    flex: 1;
  }

  .schema {
    text-align: right;
  }
  pre {
    background-color: #f0f0f0;
  }
</style>
