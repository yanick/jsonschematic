<script>
  const { schema = {} } = $props();
</script>

<ul>
  {#if schema.contentEncoding}
    <li class="content">encoding: {schema.contentEncoding}</li>
  {/if}

  {#if schema.contentMediaType}
    <li class="content">media type: {schema.contentMediaType}</li>
  {/if}
</ul>

<style>
  ul {
    margin: 0px;
    padding: 0px;
    display: flex;
  }
  li:after {
    content: ',';
  }
  li:last-child:after {
    content: '';
  }
  li {
    font-style: italic;
    list-style: none;
    margin-right: 0.5em;
  }
</style>
