<script lang="ts">
  import Constraint from './Constraint.svelte';
  import Schema from '../Schema.svelte';

  const { dependencies = {} } = $props();
</script>

<Constraint label="dependencies">
  {#each Object.entries(dependencies) as [name, schema] (name)}
    <Constraint label={name}>
      <Schema {schema} />
    </Constraint>
  {/each}
</Constraint>
