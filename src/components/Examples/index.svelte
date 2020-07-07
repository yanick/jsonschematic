<svelte:window on:hashchange={hash_change} />

<GithubCorner />

<h1>
  jsonchematic demos
  {#if selected_keywords}for {selected_keywords.join(', ')}{/if}
</h1>

<div class="body">

  <div>
    <h2>keywords</h2>

    <ul>
      <li>
        <a href="./">all examples</a>
      </li>
      {#each all_keywords as kw (kw)}
        <li>
          <a href="#{kw}">{kw}</a>
        </li>
      {/each}
    </ul>

  </div>

  <main>

    {#each filtered_examples as definition (definition.title)}
      <Example {definition} />
    {/each}

  </main>

</div>

<script>
  import examples from "./examples";
  import Example from "./Example.svelte";
  import GithubCorner from "./GithubCorner.svelte";

  import fp from "lodash/fp";

  let selected_keywords;

  const hash_change = () => {
    selected_keywords = location.hash.slice(1).split(",");
    if (selected_keywords.length === 0) selected_keywords = null;
  };

  if (location && location.hash) {
    hash_change();
  }

  let filtered_examples = [];

  $: filtered_examples = selected_keywords
    ? examples.filter(({ keywords }) => {
        return keywords.some((k) => selected_keywords.includes(k));
      })
    : examples;

  let all_keywords = [];
  $: all_keywords = fp.flow([
    fp.map(fp.get("keywords")),
    fp.flatten,
    fp.filter((x) => x),
    fp.uniq,
    fp.sortBy((x) => x),
  ])(examples);
</script>

<style>
  :global(.top_level h1) {
    font-size: var(--font-scale-10) !important;
  }

  .body {
    display: flex;
  }

  .body > div {
    width: 10%;
  }
</style>
