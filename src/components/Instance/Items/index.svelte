{#if items && Array.isArray(items)}
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
  {#if items}
    <BoxSegment legend="items">
      <Instance {href} definition={items} />
    </BoxSegment>
  {/if}
{/if}

<script>
  export let items;
  export let href;

  import Instance from "../index.svelte";
  import BoxSegment from "../BoxSegment.svelte";
</script>
