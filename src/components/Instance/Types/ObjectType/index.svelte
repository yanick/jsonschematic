<Type name="object">
  <ul>
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
    <Properties {properties}
      {dependencies}
      {required} href="{`${href}/properties`}" />
  {/if}
</Type>

<script>
  import Type from "../Type.svelte";
  import Properties from "../../Properties/index.svelte";
  import Restraints from "../Restraints.svelte";

  export let definition;
  export let href;

  let properties, minProperties, maxProperties, dependencies;
  let required = [];
  $: ({ properties, required = [], minProperties, maxProperties, dependencies
  = {} } = definition);
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
