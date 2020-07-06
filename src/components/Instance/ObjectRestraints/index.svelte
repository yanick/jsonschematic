<ul class="restraint-list">
  {#if minProperties || maxProperties}
    <li>nbr properties: {minProperties || ''}...{maxProperties || ''}</li>
  {/if}
</ul>

{#if required.length}
  <div class="label">required</div>
  <div>
    <ul>
      {#each required as r (r)}
        <li>{r}</li>
      {/each}
    </ul>
  </div>
{/if}

{#if properties}
  <Properties
    {properties}
    {dependencies}
    {required}
    href={`${href}/properties`} />
{/if}

<script>
  import Properties from "../Properties/index.svelte";

  export let href;
  export let properties;
  export let minProperties;
  export let maxProperties;
  export let dependencies;
  export let required = [];
</script>

<style>
  .label {
    font-weight: bold;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
</style>
