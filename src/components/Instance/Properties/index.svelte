<table>
  <thead>
    <tr>
      <th colspan="2">{title}</th>
    </tr>
  </thead>
  <tbody>
    {#each entries as [name, definition] (name)}
      <Property {name}>
        <Instance href="{href + '/' + name}" {definition} />
      </Property>
    {/each}
  </tbody>
</table>

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
