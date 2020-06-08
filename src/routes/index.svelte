{JSON.stringify($selected_instance)}

{#await schema_list}
  loading...
{:then list}

  <ul>
    {#each list as schema (schema)}
      <li>{schema}</li>
    {/each}
  </ul>

{/await}

<script>
  import {onMount} from 'svelte';

  import {schemas, add_schema, selected_instance} from './_schemas';

  let schema_list = new Promise(() => {});

  const load_schema = (schema) => {
    const url = '/schemas/' + schema;

    fetch(url).then( res => res.json() ).then(
      schema => add_schema(schema,url)
    );
  }

  onMount(
    () => {
      schema_list = fetch('/schemas.json').then( res => res.json() );
      schema_list.then( schemas => schemas.map( load_schema ));
    }
  );

</script>

<style>
div {
  background-color: red;
}
</style>
