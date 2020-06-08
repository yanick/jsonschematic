<script>
  export let types = [];
  export let definition = {};

  import Array from './Array/index.svelte';

  const type_components = {
    array: Array,
  };

  const comp_for = type => type_components[type];

</script>

<div>

  {#each types as type (type)}
    <svelte:component this={comp_for(type)} {definition} />
  {/each}

  </div>

<style>
</style>

