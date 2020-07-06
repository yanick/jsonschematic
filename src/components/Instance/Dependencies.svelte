{#if dependencies}


  {#if Array.isArray(dependencies)}
  <ul class="dependencies">
    {#each dependencies as dependency (dependency)}
      <li>{dependency}</li>
    {/each}
  </ul>
  {:else}
    <BoxSegment legend="dependencies">
    <Instance definition={dependencies} />
  </BoxSegment>
  {/if}


{/if}

<script>
  export let dependencies = false;

  import Instance from './index.svelte';
  import BoxSegment from './BoxSegment.svelte';
</script>

<style>
  ul:before {
    content: 'dependencies';
    margin-right: 0.5em;
  }
  ul {
    list-style: none;
    padding:  0px;
    margin: 0px;
    display: flex;
  }
</style>
