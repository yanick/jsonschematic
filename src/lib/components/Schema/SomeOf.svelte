<script>
  import Schema from '../Schema.svelte';
  import Constraint from './Constraint.svelte';

  let { type, alternatives } = $props();
</script>

<Constraint label={type}>
  {#each alternatives as schema (schema)}
    <Schema {schema} />
  {/each}
</Constraint>
