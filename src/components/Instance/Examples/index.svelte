<Property name="examples" href="{href}/examples">

  {#each examples as example (example)}
    <pre>
      <code>{example}</code>
    </pre>
  {/each}

</Property>

<script>
  export let examples = [];
  export let href = "";
  import Property from "../Properties/Property.svelte";
</script>

<style>
  pre {
    margin-top: 0px;
    margin-bottom: 0.5em;
  }
</style>
