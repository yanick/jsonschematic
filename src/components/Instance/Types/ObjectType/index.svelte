<Type name="object">
  {#if properties}
    <Properties {properties} href="{`${id}/properties`}" />
  {/if}
</Type>

<script>
  import Type from "../Type.svelte";
  import Properties from "../../Properties/index.svelte";

  export let definition;
  export let id = "";

  let properties;
  $: ({ properties } = definition);
</script>
