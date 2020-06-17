<Type name="object">
  {#if properties}
    <Properties {properties} href="{`${href}/properties`}" />
  {/if}
</Type>

<script>
  import Type from "../Type.svelte";
  import Properties from "../../Properties/index.svelte";

  export let definition;
  export let href;

  let properties;
  $: ({ properties } = definition);
</script>
