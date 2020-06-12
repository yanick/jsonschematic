<div class="instance">
  {#if top_level && href}
    <div class="instance_href">{href}</div>
  {/if}

  {#if schema}
    <div class="schema">
      <a href="{schema}">{schema_name(schema)}</a>
    </div>
  {/if}

  {#if title}
    <h1 class="title">{title}</h1>
  {/if}

  <Types {types} definition="{expanded_def}" />

  {#if ref}
    <div>
      extends
      <a href="#dummy">{ref}</a>

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

  {#if description}
    <div class="description">{description}</div>
  {/if}

  {#if items}
    <Items {items} href="{`${href}/items`}" />
  {/if}

  {#if properties}
    <Properties {properties} href="{`${href}/properties`}" />
  {/if}

</div>

<script>
  import * as store from "../../routes/_schemas";

  export let definition = {};
  export let href;
  export let fetch_segment = store.fetch_segment;
  export let top_level;

  import Types from "./Types/index.svelte";
  import Items from "./Items/index.svelte";
  import Properties from "./Properties/index.svelte";

  let schema, types, items, ref, title, id, description, properties;
  let expanded_ref = {};
  let loading_ref = false;
  let is_expanded_ref = false;

  let expanded_def = definition;

  $: expanded_def = { ...expanded_ref, ...definition };

  $: {
    ({
      id,
      description,
      title,
      $schema: schema,
      type: types,
      items,
      $ref: ref,
      properties,
    } = expanded_def);

    // always pass an array, to make it easier
    if (!Array.isArray(types)) {
      types = [types];
    }
  }

  const fetch_ref = async () => {
    loading_ref = true;

    console.log({ href });

    const def = await fetch_segment(ref, href);

    is_expanded_ref = true;
    expanded_ref = def;
  };

  const remove_ref = async () => {
    loading_ref = false;
    expanded_ref = {};
    is_expanded_ref = false;
  };

  $: console.log(expanded_ref);

  function schema_name(url) {
    const draft = url.match(/draft-(\d\d)/);
    if (!draft) return url;

    return `v${draft[1]}`;
  }
</script>

<style>
  .title {
    color: var(--color-blue);
    font-size: var(--font-scale-14);
  }

  .instance_href {
    font-style: italic;
  }

  .schema {
    text-align: right;
  }
</style>
