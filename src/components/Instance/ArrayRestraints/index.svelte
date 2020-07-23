<ul>
  {#if maxItems || minItems}
    <li>items: {minItems || ''}...{maxItems || ''}</li>
  {/if}

  {#if maxContains || minContains}
    <li>contains: {minContains || ''}...{maxContains || ''}</li>
  {/if}

  {#if uniqueItems}
    <li>unique</li>
  {/if}

  {#if show_additionalItems && isBoolean(additionalItems)}
    <li>additional items {additionalItems ? '' : 'not'} allowed</li>
  {/if}
</ul>

<Items {items} href={`${href}/items`} />

{#if show_additionalItems && isPlainObject(additionalItems)}
  <BoxSegment legend="additional items">
    <Instance definition={additionalItems} href={`${href}/additionalItems`} />
  </BoxSegment>
{/if}

<script>
  const isBoolean = require("lodash/isBoolean");
  const isPlainObject = require("lodash/isPlainObject");

  export let href = "";

  export let maxItems;
  export let minItems;
  export let uniqueItems = false;
  export let maxContains;
  export let minContains;
  export let items;
  export let additionalItems;

  let show_additionalItems;
  $: show_additionalItems = !isPlainObject(items);

  import Items from "../Items/index.svelte";
  const Instance = require("../index.svelte").default;
  import BoxSegment from "../BoxSegment.svelte";
</script>

<style>
  ul {
    list-style: none;
    display: flex;
    padding: 0px;
    margin: 0px;
    grid-column: span 2;
  }
  li {
    margin-right: 0.25em;
  }
  li:after {
    content: ", ";
  }
  li:last-child:after {
    content: "";
  }
</style>
