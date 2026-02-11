<script>
  import Schema from '../Schema.svelte';
  import Constraint from './Constraint.svelte';

  const { items } = $props();
</script>

<Constraint label="items">
  {#if Array.isArray(items)}
    <ol>
      {#each items as schema (schema)}
        <li>
          <Schema {schema} />
        </li>
      {/each}
    </ol>
  {:else}
    <Schema schema={items} />
  {/if}
</Constraint>
