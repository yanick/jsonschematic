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
  {console.log('not array')}
  {console.log(items)}
      <Instance {href} definition={items} />
  {/if}
{/if}
<script>

  //  <BoxSegment legend="items">
   // </BoxSegment>
  export let items;
  export let href;

  import Instance from "../index.svelte";
  import BoxSegment from "../BoxSegment.svelte";
</script>
