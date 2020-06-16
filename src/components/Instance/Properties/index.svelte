<div>{title}</div>

{#each entries as [name, definition] (name)}
  <Property {name}>
    <Instance href="{href + '/' + name}" {definition} />
  </Property>
{/each}

<script>
  export let properties = {};
  export let href;
  export let title = "properties";

  import Property from "./Property.svelte";

  let entries = [];

  $: entries = Object.entries(properties);
  $: entries.sort();

  let items_href;
  $: items_href = [href, "items"].join("/");

  import Instance from "../index.svelte";
</script>

<style>
  div {
    grid-column: span 2;
    font-weight: bold;
  }

  thead th {
    text-align: left;
  }
  div div {
    margin-left: 1em;
  }
  table {
    margin-bottom: 1em;
  }
</style>
