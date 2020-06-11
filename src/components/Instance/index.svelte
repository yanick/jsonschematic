<script>
  export let definition = {};

  import Types from "./Types/index.svelte";
  import Items from "./Items/index.svelte";

  let schema, types, items, ref, title, id, description;
  let expanded_ref = {};
  let is_expanded_ref = false;

  $: {
    ({
    id,
    description,
    title,
    $schema: schema,
    type: types,
    items,
    $ref: ref,
  } = {
      ...expanded_ref,
    ...definition,
    });

    // always pass an array, to make it easier
    if (!Array.isArray(types)) {
      types = [types];
    }
  }

</script>

<style>
  .title {
    color: var(--color-blue);
    font-size: var(--font-scale-14);
  }

  .instance_id {
    font-style: italic;
  }
</style>

<div class="instance">
  <div class="instance_id">{id}</div>

  {#if schema}
    <div class="schema">
      schema:
      <a href={schema}>{schema}</a>
    </div>
  {/if}

  <h1 class="title">{title}</h1>

  <Types {types} {definition} />

  {#if description}
  <div class="description">{description}</div>
  {/if}

  {#if items}
    <Items {items} />
  {/if}

</div>
