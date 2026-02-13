<script>
  import Schema from '../Schema.svelte';
  import Constraint from './Constraint.svelte';

  const { schema = {} } = $props();
</script>

<Constraint label="if">
  <Schema schema={schema.if} />
  {#each ['then', 'else'] as keyword (keyword)}
    {#if schema[keyword]}
      <Constraint label={keyword}><Schema schema={schema[keyword]} /></Constraint>
    {/if}
  {/each}
</Constraint>
