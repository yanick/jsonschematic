<script lang="ts">
  import Wrapper from './Wrapper.svelte';

  const { schema = {} } = $props();

  const enumeration = $derived(schema.enum ?? []);
  const name = $derived(schema.constant ? 'const' : 'enum');
</script>

<Wrapper {name}>
  <ul>
    {#each enumeration as e}
      <li>{e}</li>
    {/each}
  </ul>
</Wrapper>

<style>
  ul {
    list-style: none;
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
