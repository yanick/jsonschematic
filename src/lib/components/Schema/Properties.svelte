<script lang="ts">
  import Constraint from './Constraint.svelte';
  import Schema from '../Schema.svelte';

  const { properties = {}, label = 'properties', required = [] } = $props();

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
        {#if required.includes(name)}
          <span class="required">required</span>
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
  .required {
    color: red;
    margin-left: 2em;
  }
</style>
