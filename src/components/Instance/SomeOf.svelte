{#if alternatives && alternatives.length}
  <BoxSegment legend={type}>
    {#each alternatives as alternative (alternative)}
      <BoxSegment>
        <Instance definition={alternative} {href} />
      </BoxSegment>
    {/each}
  </BoxSegment>

{/if}

<script>
  export let type;
  export let alternatives;
  export let href;

  import BoxSegment from "./BoxSegment.svelte";
  const Instance = require("./index.svelte").default;
</script>
