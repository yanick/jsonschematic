{#if items !== undefined}
  {#if Array.isArray(items)}
    <BoxSegment legend="items">
      <ol>
        {#each items as item (item)}
          <li>
            <Instance {href} definition={item} />
          </li>
        {/each}
      </ol>
    </BoxSegment>
  {:else}
    <BoxSegment legend="items">
      <Instance {href} definition={items} />
    </BoxSegment>
  {/if}

{/if}

<script>
  export let items;
  export let href;

  const Instance = require("../index.svelte").default;
  import BoxSegment from "../BoxSegment.svelte";
</script>
