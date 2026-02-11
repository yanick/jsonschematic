<script>
  import examples, { scrubExample } from '$lib/examples.js';
  import u from '@yanick/updeep';
  import Schema from '$lib/components/Schema.svelte';
  import slug from 'slug';

  const { data } = $props();

  const schema = $derived(examples.find((eg) => slug(eg.title) == data.id));
</script>

<main class="container">
  <div>
    <Schema {schema} />
  </div>
  <div>
    <pre>{JSON.stringify(schema, null, 2)}</pre>
  </div>
</main>

<style>
  main {
    display: flex;
    column-gap: 2em;
  }

  main > div {
    width: 45%;
  }
</style>
