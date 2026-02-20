<script lang="ts">
  import { browser } from '$app/environment';
  import jsonpointer from 'jsonpointer';

  import Schema from './Schema.svelte';
  import TableOfContent from './TableOfContent.svelte';

  const props: { schema?: any; url?: any } = $props();

  let url = $state();
  if (browser)
    url = new URL(
      props.url ?? props.schema?.id ?? 'https://jsonschematic/',
      browser ? window.location.href : undefined
    ).href;

  let repository = $state({});

  if (props.schema) repository[url] = props.schema;

  if (props?.schema?.id) repository[props.schema.id] = props.schema;

  let rootSchema = $state(new Promise(() => {}));
  if (props.schema) rootSchema = new Promise.resolve(props.schema);

  let schemaPointer = $state();

  const schema = $derived(
    rootSchema.then((schema) => {
      if (schemaPointer) return jsonpointer.get(schema, hash);
      return schema;
    })
  );

  async function fetchSchema(url: string) {
    if (!browser) return {};

    if (!repository[url]) {
      const schema = fetch(url).then((res) => res.json());
      repository[url] = schema;
    }

    return repository[url];
  }

  const handleHashChange = () => {
    let u = new URL(window.location.hash?.replace(/^#/, ''), url);
    url = u.href;

    schemaPointer = u.hash.replace(/^#+/, '');

    u.hash = '';

    const document = u.href;

    rootSchema = fetchSchema(document);
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
  {#await Promise.all([rootSchema, schema])}
    Doing the thing
  {:then [rootSchema, schema]}
    <TableOfContent schema={rootSchema} />
    <main>
      <h2>{url}</h2>
      <Schema {schema} />
    </main>
  {:catch oopsie}
    Oh noes {oopsie}
  {/await}
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
