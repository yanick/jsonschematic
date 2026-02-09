<script>
  import examples, { scrubExample } from '$lib/examples.js';
  import u from '@yanick/updeep';
  import Schema from '$lib/components/Schema.svelte';

  let schema = $state(examples[0]);
  //  const schema = $derived(scrubExample(examples.find(u.matches({ _id: data.id }))));

  const pick = ($anchor) => () => {
    console.log($anchor);
    schema = examples.find(u.matches({ $anchor }));
  };
</script>

<main class="container">
  <aside>
    <ul>
      {#each examples as eg (eg.title)}
        <li><a onclick={pick(eg.$anchor)}>{eg.title}</a></li>
      {/each}
    </ul>
  </aside>

  <section>
    <h1>{schema?.title}</h1>
    <div>
      {#if schema}
        <div>
          <Schema {schema} />
        </div>
        <div>
          <pre>{JSON.stringify(schema, null, 2)}</pre>
        </div>
      {:else}
        Schema not picked yet
      {/if}
    </div>
  </section>
</main>

<style>
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
