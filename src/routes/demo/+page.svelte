<script>
  import examples, { scrubExample, examplesByKeyword } from '$lib/examples.js';
  import u from '@yanick/updeep';
  import Schema from '$lib/components/Schema.svelte';
  import slug from 'slug';
  import { browser } from '$app/environment';

  let schema = $state(examples[0]);
  //  const schema = $derived(scrubExample(examples.find(u.matches({ _id: data.id }))));

  const pick = ($anchor) => () => {
    console.log($anchor);
    schema = examples.find(u.matches({ $anchor }));
  };

  let keyword = $state();
  const hashChange = () => {
    if (browser) keyword = location.hash.slice(1).split(',');
  };

  hashChange();

  const selectedSchemas = $derived(keyword ? examplesByKeyword[keyword] : examples);
</script>

<svelte:window onhashchange={hashChange} />

<main class="container">
  <aside>
    <ul>
      {#each Object.keys(examplesByKeyword).sort() as keyword (keyword)}
        <li><a href={'#' + keyword}> {keyword}</a></li>
      {/each}
    </ul>
  </aside>

  <section>
    <h1>{keyword}</h1>
    <div>
      {#each selectedSchemas as schema}
        <div>
          <Schema {schema} />
        </div>
        <div>
          <pre>{JSON.stringify(schema, null, 2)}</pre>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  aside {
    height: 90vh;
    overflow-y: scroll;
    font-size: smaller;
  }
  main {
    display: flex;
  }
  section {
    flex: 1;
  }
  section > div {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1em;
  }
  section > div > div {
    width: 45%;
  }
</style>
