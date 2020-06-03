<script>
  export let definition = {};

  import Types from "./Types";
  import Items from "./Items";

  let title, description, schema, types, items, ref;
  let expanded_ref = {};
  let is_expanded_ref = false;

  $: {
    ({ title, description, $schema: schema, type: types, items, $ref: ref } = {
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
    color: blue;
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
</style>

<div class="instance">
  {#if schema}
    <div class="schema">
      schema:
      <a href={schema}>{schema}</a>
    </div>
  {/if}

  {#if title}
    <div class="title">{title}</div>
  {/if}

  <Types {types} {definition} />

  {#if description}
    <div class="description">{description}</div>
  {/if}

  {#if items}
    <Items {items} />
  {/if}

</div>
