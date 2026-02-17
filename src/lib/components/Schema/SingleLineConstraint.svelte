<script>
  import Constraint from './Constraint.svelte';
  const { label = undefined, schema = {}, children = undefined, title = undefined } = $props();
</script>

<Constraint {label} {title}>
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
