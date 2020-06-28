<h1>jsonchematic demos
  {#if selected_keywords}
    for {selected_keywords.join(', ')}
  {/if}
</h1>

{#each filtered_examples as example (example.title)}
  <Example  {...example} />
{/each}

<svelte:window on:hashChange={hash_change} />

<script>
  import examples from './examples';
  import Example from './Example.svelte';

  let selected_keywords;

  const hash_change = () => {
    selected_keywords = location.hash.slice(1).split(',');
    if( selected_keywords.length === 0 ) selected_keywords= null;
  }

  if( location && location.hash ) {
    hash_change();
  }

  let filtered_examples = [];

  $: filtered_examples = selected_keywords ?examples.filter(
    ({keywords}) => {
      console.log({keywords,selected_keywords});

      return keywords.some( k => selected_keywords.includes(k) )
    }

  ) : examples;

</script>
