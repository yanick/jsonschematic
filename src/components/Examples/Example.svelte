<div>
  <pre><code>{ JSON.stringify(clean_def,null,2) }</code></pre>
  <div>
  <Instance top_level {definition} />
</div>
</div>

<script>
  export let definition = {};
  import Instance from '../Instance/index.svelte';
  import fp from 'lodash/fp';

  let clean_def = definition;
  $: clean_def = fp.omit('keywords',definition);
</script>

<style>
  div {
    display: flex;
    width: 90%;
    margin-left:5%;
    margin-right:5%;
  }

  div > * {
    flex: 1;
    height: min-content;
  }

  pre {
    background-color: #f0f0f0;
  }
  </style>
