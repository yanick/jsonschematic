<button on:click={change_def}>click me</button>
<Instance {definition} />

<script>
  let definition = {
    type: "object",
    properties: {
      foo: { type: "string" },
      bar: { type: "string" },
    },
    required: ["foo"],
  };

  const Instance = require("./index.svelte").default;

  const change_def = () => {
    definition = {
      type: "object",
      properties: {
        quux: { type: "string" },
      },
    };
  };
</script>
