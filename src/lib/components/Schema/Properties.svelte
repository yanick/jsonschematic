<script lang="ts">
  import Constraint from './Constraint.svelte';
  import Schema from '../Schema.svelte';

  const { properties = {}, label = 'properties' } = $props();

  function hasTitle(name, title = '') {
    return title && title.toLowerCase() !== name.toLowerCase();
  }
</script>

<Constraint {label}>
  {#each Object.entries(properties) as [name, schema] (name)}
    <Constraint>
      {#snippet title()}
        {name}
        {#if hasTitle(name, schema.title)}
          &mdash; <h6>{schema.title}</h6>
        {/if}
      {/snippet}
      <Schema {schema} notitle />
    </Constraint>
  {/each}
</Constraint>

<style>
  h6 {
    display: inline;
  }
</style>
