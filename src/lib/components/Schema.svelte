<script>
  import Enum from './Schema/Enum.svelte';
  import '@picocss/pico/css/pico.css';

  const { schema = {} } = $props();
  let href = 'TODO';
</script>

<article>
  <header>
    <h6>{schema.title}</h6>
  </header>

  <dl>
    {#if schema.enum}
      <Enum {schema} {href} />
    {/if}
  </dl>
</article>

<style>
  h6 {
    margin-bottom: 0px;
  }
</style>
