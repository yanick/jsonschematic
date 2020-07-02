<div>{title}</div>

{#each entries as [name, definition] (name)}
  <Property {name} required={required.includes(name)}>
    <Instance href="{href + '/' + name}" {definition}
      dependencies={dependencies[name]}
    />
  </Property>
{/each}

<script>
  export let properties = {};
  export let required = [];
  export let href;
  export let title = "properties";
  export let dependencies = {};

  import Property from "./Property.svelte";
  import { sortBy, flow, toPairs } from 'lodash/fp';
  const Instance = require('../index.svelte').default;

  console.log({Instance});


  let entries = [];

  const sort_by_required = sortBy((e) => !required.includes(e[0]));
  const sort_by_name = sortBy((e) => e[0]);

  $: console.log({properties});
  $: {
    entries = flow([
      Object.entries,
         sort_by_name,
        sort_by_required
    ])(properties);
  }

  $: console.log({Instance});
  $: console.log(entries);


  let items_href;
  $: items_href = [href, "items"].join("/");

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
