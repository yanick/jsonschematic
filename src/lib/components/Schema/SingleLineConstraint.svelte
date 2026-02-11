<script>
  import Constraint from './Constraint.svelte';
  const { schema = {}, children = undefined } = $props();
</script>

<Constraint>
  <ul>{@render children?.()}</ul>
</Constraint>

<style>
  ul {
    margin: 0px;
    padding: 0px;
    display: flex;
  }
  ul :global(li:after) {
    content: ',';
  }
  ul :global(li:last-child:after) {
    content: '';
  }
  ul :global(li) {
    font-style: italic;
    list-style: none;
    margin-right: 0.5em;
  }
</style>
