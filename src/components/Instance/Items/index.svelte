<table>
  <tbody>
    <Property name="items">
      <Instance {href} definition="{items}" />
    </Property>
  </tbody>
</table>

<script>
  export let items = {};
  export let href;

  let items_href;
  $: items_href = [href, "items"].join("/");

  import Instance from "../index.svelte";
  import Property from "../Properties/Property.svelte";
</script>

<style>
  div div {
    margin-left: 1em;
  }
</style>
