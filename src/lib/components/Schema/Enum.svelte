<script lang="ts">
  import Constraint from './Constraint.svelte';
  const { schema = {} } = $props();
</script>

<Constraint title="enum">
  <ul>
    {#each schema.enum ?? [] as e}
      <li><code>{e}</code></li>
    {/each}
  </ul>
</Constraint>

<style>
  ul {
    margin: 0px;
    padding: 0px;
    display: flex;
  }
  li:after {
    content: ',';
  }
  li:last-child:after {
    content: '';
  }
  li {
    list-style: none;
    margin-right: 0.5em;
  }
  .filter input {
    font-size: var(--font-scale-8);
  }
  .filter .filter_box {
    margin-top: 0px;
    margin-bottom: 0px;
  }
</style>
