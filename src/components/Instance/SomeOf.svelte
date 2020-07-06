{#if alternatives && alternatives.length}
  <BoxSegment legend={type}>
    {#each alternatives as alternative (alternative)}
      <BoxSegment>
        <Instance definition={alternative} />
      </BoxSegment>
    {/each}
  </BoxSegment>

{/if}

<script>
  export let type;
  export let alternatives;

  import BoxSegment from "./BoxSegment.svelte";
  import Instance from "./index.svelte";
</script>

<style>
  div {
    background-color: red;
  }
</style>
