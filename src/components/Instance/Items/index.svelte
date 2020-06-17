<div>items</div>

<Instance {href} definition="{items}" />

<script>
  export let items = {};
  export let href;

  let items_href;
  $: items_href = [href, "items"].join("/");

  import Instance from "../index.svelte";
  import Property from "../Properties/Property.svelte";
</script>

<style>
  div {
    font-weight: bold;
  }
</style>
