<script>
  import Constraint from './Constraint.svelte';
  const { schema = {} } = $props();
</script>

<Constraint label="examples">
  {#each schema.examples ?? [] as example (example)}
    <pre>
{JSON.stringify(example, null, 2)}
    </pre>
  {/each}
</Constraint>

<style>
  pre {
    padding-top: 1em;
    margin-bottom: 0.5em;
  }
</style>
