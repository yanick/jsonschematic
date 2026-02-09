<script>
  import examples, { scrubExample } from '$lib/examples.js';
  import u from '@yanick/updeep';
  import Schema from '$lib/components/Schema.svelte';

  const { data } = $props();

  const schema = $derived(scrubExample(examples.find(u.matches({ _id: data.id }))));
</script>

<main class="container">
  <Schema {schema} />
</main>
