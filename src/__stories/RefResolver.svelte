{#await resolved}
  loading...
{:then def}
  <Instance definition={def} />
{/await}

<script>
  export let definition;
  const RefParser = require("@apidevtools/json-schema-ref-parser");
  import Instance from "../components/Instance/index.svelte";

  let resolved;
  $: resolved = RefParser.dereference(definition, {
    resolve: {
      file: false,
      http: false,
    },
    dereference: {
      circular: "ignore",
    },
  });
</script>
