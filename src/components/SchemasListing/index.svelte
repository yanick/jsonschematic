<dl>
{#each schema_ids as schema (schema)}
  <dt>
    <a on:click|preventDefault={select_instance(schema)} href="#">
      {schema}</a>
  </dt>
  <dd>
  </dd>
{/each}
</dl>

<script>
    export let schemas = {};
  export let selected_instance_url;

  import {
    createEventDispatcher
  } from 'svelte';

  let selected_id, selected_segment;
  $: ([selected_id,selected_segment] = selected_instance_url ?
  selected_instance_url.split('#') : []);

  let schema_ids = [];
  $: schema_ids = Object.keys(schemas);
  $: schema_ids.sort();

  const dispatch = createEventDispatcher();

  const select_instance = schema => () => {
    dispatch('select_instance',schema);
  }

</script>

<style>
div {
  background-color: red;
}
</style>
