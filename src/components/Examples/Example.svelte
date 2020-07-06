<div class="example">

  <div>
    {#if edit_mode}
      <textarea
        class:error={error_edit}
        cols="60"
        rows="10"
        bind:value={text_def} />
      {#if error_edit}
        <div class="error">Invalid JSON</div>
      {/if}
    {:else}
      <pre>
        <code>{text_def}</code>
      </pre>
      <div class="edit_me">
        <input
          type="button"
          value="edit me"
          on:click={() => (edit_mode = !edit_mode)} />
      </div>
    {/if}
  </div>

  <div class="instance">
    <Instance top_level definition={edited_def} />
  </div>
</div>

<hr />

<script>
  export let definition = {};
  import Instance from "../Instance/index.svelte";
  import fp from "lodash/fp";

  let clean_def = fp.omit("keywords", definition);
  $: clean_def = fp.omit("keywords", definition);

  let edit_mode = false;

  let text_def = JSON.stringify(clean_def, null, 2);

  let error_edit = false;
  let edited_def = {};
  $: {
    try {
      edited_def = JSON.parse(text_def);
      error_edit = false;
    } catch {
      error_edit = true;
    }
  }
</script>

<style>
  .example {
    display: flex;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }

  .example > * {
    flex: 1;
    height: min-content;
  }

  pre {
    background-color: #f0f0f0;
  }

  .edit_me {
    text-align: right;
  }

  .instance {
    margin-left: 1em;
  }

  .error {
    border-color: red;
  }

  div.error {
    text-color: red;
  }
</style>
