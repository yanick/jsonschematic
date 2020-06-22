<div>{title}</div>

{#each entries as [name, definition] (name)}
  <Property {name} required="{required.includes(name)}">
    <Instance href="{href + '/' + name}" {definition} />
  </Property>
{/each}

<script>
  export let properties = {};
  export let required = [];
  export let href;
  export let title = "properties";

  import Property from "./Property.svelte";
  //import fp from "lodash/fp";
  const fp =  require("lodash/fp");

  let entries = [];

  const sort_by_required = fp.sortBy((e) => !required.includes(e[0]));
  const sort_by_name = fp.sortBy((e) => e[0]);

  $: {
    entries = sort_by_required(sort_by_name(Object.entries(properties)));
  }

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
