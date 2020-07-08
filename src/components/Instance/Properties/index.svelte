<div>
  {#each entries as [name, definition] (name)}
    <Property {name} required={required.includes(name)}>
      <Instance
        href={href + '/' + name}
        {definition}
        dependencies={dependencies[name]} />
    </Property>
  {/each}
</div>

<script>
  export let properties = {};
  export let required = [];
  export let href;
  export let dependencies = {};

  import Property from "./Property.svelte";
  import { sortBy, flow } from "lodash/fp";
  const Instance = require("../index.svelte").default;

  let entries = [];

  const sort_by_required = sortBy((e) => !required.includes(e[0]));
  const sort_by_name = sortBy((e) => e[0]);

  $: {
    entries = flow([Object.entries, sort_by_name, sort_by_required])(
      properties
    );
  }

  let items_href;
  $: items_href = [href, "items"].join("/");
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 100fr;
    align-items: first baseline;
    grid-column-gap: 1em;
    margin-bottom: 1em;
  }
</style>
