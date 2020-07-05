{#if dependencies}


  {#if Array.isArray(dependencies)}
  <ul class="dependencies">
    {#each dependencies as dependency (dependency)}
      <li>{dependency}</li>
    {/each}
  </ul>
  {:else}
    <div class="title">dependencies</div>
    <Instance definition={dependencies} />
  {/if}


{/if}

<script>
  export let dependencies = false;

  import Instance from './index.svelte';
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
  div.title {
    grid-column: span 2;
    font-weight: bold;
  }
</style>
