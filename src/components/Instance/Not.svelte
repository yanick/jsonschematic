{#if definition}
  <BoxSegment legend="not">
    <Instance {definition} />
  </BoxSegment>
{/if}

<script>
  export let definition;

  import BoxSegment from "./BoxSegment.svelte";
  import Instance from "./index.svelte";
</script>

<style>
  div {
    background-color: red;
  }
</style>
