<Type name="object">
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
    <Properties {properties} {required} href="{`${href}/properties`}" />
  {/if}
</Type>

<script>
  import Type from "../Type.svelte";
  import Properties from "../../Properties/index.svelte";

  export let definition;
  export let href;

  let properties;
  let required = [];
  $: ({ properties, required = [] } = definition);
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
