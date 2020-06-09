<script>
  export let definition = {};
  export let description;
  export let title;

  export let id;

  import Types from "./Types/index.svelte";
  import Items from "./Items/index.svelte";

  let schema, types, items, ref;
  let expanded_ref = {};
  let is_expanded_ref = false;

  $: {
    ({ $schema: schema, type: types, items, $ref: ref } = {
      ...expanded_ref,
      ...definition
    });

    //
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
  .type {
    color: darkgreen;
  }
  .type {
    text-align: left;
  }
  .type-details {
    text-size: smaller;
    color: green;
  }

  instance_id {
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

  <div class="description">{description}</div>

  {#if items}
    <Items {items} />
  {/if}

</div>
