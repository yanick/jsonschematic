<div>
  <pre><code>{ JSON.stringify(definition,null,2) }</code></pre>
  <div>
  <Instance {definition} />
</div>
</div>

<script>
   export let title;
   export let def;

  import Instance from '../Instance/index.svelte';

  let definition = {};

  $: definition = { ...def, title };

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
