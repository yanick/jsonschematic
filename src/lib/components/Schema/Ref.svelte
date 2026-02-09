<script>
  import Constraint from './Constraint.svelte';

  const { schema = {} } = $props();
  // TODO resolve the ref and expands
</script>

<Constraint label="ref">
  <a href={schema.$ref}>{schema.$ref}</a>
</Constraint>
