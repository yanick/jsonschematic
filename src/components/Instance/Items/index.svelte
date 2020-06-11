<div>
  items:

  <Instance
      href={items_href}
      definition={items} />

</div>

<script>
  export let items = {};
  export let href;

  let items_href;
  $: items_href = [href,'items'].join('/');

  import Instance from '../index.svelte';

</script>

<style>
</style>
