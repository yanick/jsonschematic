<script lang="ts">
  import Constraint from './Constraint.svelte';
  import Schema from '../Schema.svelte';

  const { properties = {} } = $props();
</script>

<Constraint label="properties">
  {#each Object.entries(properties) as [name, schema] (name)}
    <Constraint label={name}>
      <Schema {schema} />
    </Constraint>
  {/each}
</Constraint>
