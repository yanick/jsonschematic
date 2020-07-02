{#if dependencies}
  <ul class="dependencies">
    {#each dependencies as dependency (dependency)}
      <li>{dependency}</li>
    {/each}
  </ul>
{/if}

<script>
  export let dependencies = false;
</script>

<style>
  ul:before {
    content: 'requires';
    margin-right: 0.5em;
  }
  ul {
    list-style: none;
    padding:  0px;
    margin: 0px;
    display: flex;
  }
</style>
