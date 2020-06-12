  <div class="schemas_listing">
    <h2>schemas</h2>
<dl>
{#each schema_ids as schema (schema)}
  <dt>
    <a on:click|preventDefault={select_instance(schema)} href="#"
      title={schema}>
      {schema}</a>
  </dt>
  <dd>
   <Definitions select_instance={select_instance} definitions="{schema_definitions[schema]}" base_url="{schema}"> </Definitions>
  </dd>
{/each}
</dl>
  </div>

<script>
  export let schemas = {};
  export let selected_instance_url;

  import {
    createEventDispatcher
  } from 'svelte';

  import Definitions from "./Definitions/index.svelte"

  let selected_id, selected_segment;
  $: ([selected_id,selected_segment] = selected_instance_url ?
  selected_instance_url.split('#') : []);

  let schema_ids = [];

  let schema_definitions = [];

  $: {
    schema_ids = Object.keys(schemas);
    Object.keys(schemas).map( (id) => {
      if ( schemas[id].definitions &&
        Object.keys(schemas[id].definitions).length ) {
        schema_definitions[id] = schemas[id].definitions;
      }
    })
   schema_ids.sort();
  };


  const dispatch = createEventDispatcher();

  const select_instance = schema => () => {
    dispatch('select_instance',schema);
  }

</script>

<style>
  h2 {
    font-size: var(--font-scale-13);
    color: var(--color-base02);
  }
  dt {
    display: block;
  }

  dd {
    margin-bottom: 1em;
  }
</style>
