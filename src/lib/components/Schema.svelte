<script>
  import Enum from './Schema/Enum.svelte';
  import '@picocss/pico/css/pico.css';

  const { schema = {} } = $props();
  let href = 'TODO';
</script>

<article>
  <header>
    <div class="top-section">
      <div>{schema.$id}</div>
      <div>{schema.$schema}</div>
    </div>
    <h6>{schema.title}</h6>
    {#if schema.$anchor}
      <div class="anchor">#{schema.$anchor}</div>
    {/if}
    <div></div>
  </header>

  {#if schema.description}
    <div class="description">{schema.description}</div>
  {/if}

  {#if schema.$comment}
    <blockquote class="comment">{schema.$comment}</blockquote>
  {/if}

  <dl>
    {#if schema.enum}
      <Enum {schema} {href} />
    {/if}
  </dl>
</article>

<style>
  h6 {
    margin-bottom: 0px;
    flex: 1;
  }
  blockquote {
    font-style: italic;
  }
  .anchor {
    font-size: small;
  }
  header {
    display: flex;
    flex-wrap: wrap;
  }
  .top-section {
    display: flex;
    justify-content: space-between;
    font-size: small;
    width: 100%;
  }
</style>
