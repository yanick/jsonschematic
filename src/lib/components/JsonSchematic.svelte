<script lang="ts">
  import { browser } from '$app/environment';
  import jsonpointer from 'jsonpointer';

  import Schema from './Schema.svelte';
  import TableOfContent from './TableOfContent.svelte';

  const props: { schema?: any; url?: any } = $props();

  let schema = $state(props.schema);
  let rootSchema = schema;
  let url = $state(props.url ?? props.schema?.id ?? '');

  let repository = $state({});

  if (props.url && props.schema) {
    repository[props.url] = props.schema;
  }
  if (props?.schema?.id) {
    repository[props.schema.id] = props.schema;
  }

  if (!props.url && !props?.schema?.id) {
    repository['https://jsonschematic'] = props.schema;
  }

  $effect(() => {
    if (url) return;
    url = schema.id;
  });

  const handleHashChange = () => {
    let u = new URL(window.location.hash?.replace(/^#/, ''), url);
    url = u.href;

    const hash = u.hash.replace(/^#+/, '');

    u.hash = '';

    const document = u.href;

    let s = repository[document];
    rootSchema = s;
    if (hash) {
      s = jsonpointer.get(s, hash);
    }
    schema = s;
  };

  if (browser) {
    if (window.location.hash) {
      handleHashChange();
    } else {
      window.location.hash = url;
    }
  }
</script>

<svelte:window onhashchange={handleHashChange} />
<div class="content">
  <TableOfContent schema={rootSchema} />
  <main>
    <h2>{url}</h2>
    <Schema {schema} />
  </main>
</div>

<style>
  :global(html) {
    font-size: 12pt;
  }
  .content {
    display: flex;
    gap: 1rem;
  }

  .content :global(aside) {
    width: 20%;
  }
</style>
