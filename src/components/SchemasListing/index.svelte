<div class="schemas_listing">
  <h2>schemas</h2>
  <dl>
    {#each schema_ids as schema (schema)}
      <dt>
        <a href={'#' + encodeURI(schema)} title={schema}>{schema}</a>
      </dt>
      <dd>
        <Definitions
          definitions={schema_definitions[schema]}
          base_url={schema} />
      </dd>
    {/each}
  </dl>
</div>

<script>
  export let schemas = {};
  export let selected_instance_url;

  import Definitions from "./Definitions/index.svelte";

  let selected_id, selected_segment;
  $: [selected_id, selected_segment] = selected_instance_url
    ? selected_instance_url.split("#")
    : [];

  let schema_ids = [];

  let schema_definitions = [];

  $: {
    schema_ids = Object.keys(schemas);
    schema_ids.sort();
    schema_ids.forEach((id) => {
      if (schemas[id].definitions) {
        schema_definitions[id] = schemas[id].definitions;
      }
    });
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
