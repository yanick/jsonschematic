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

  let schema_list = new Promise();

  onMount(
    () => {
      schema_list = fetch('/schemas.json').then( res => res.json() );
    }
  );

</script>

<style>
div {
  background-color: red;
}
</style>
