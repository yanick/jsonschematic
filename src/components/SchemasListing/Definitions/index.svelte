{#each definition_names as definition}
  <dt>
    <a href="{'#' + ref(definition)}" title="{definition}">{definition}</a>
  </dt>
{/each}

<script>
  export let definitions = {}; //definitions section of the schema
  export let base_url = ""; //main schema url

  let definition_names = [];
  $: definition_names = Object.keys(definitions).sort();

  const ref = (definition) => {
    return base_url + "#/definitions/" + definition;
  };
</script>

<style>

</style>
