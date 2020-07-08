<div class="top_viewer">
  <div class="schemas_column">
    <SchemasListing
      on:select_instance={updateInstance}
      schemas={$schemas}
      selected_instance_url={$selected_instance_url} />
  </div>

  <div class="instance_viewer">
    <div class="show-div">
      <input
        type="button"
        on:click={() => (show_raw_schema = !show_raw_schema)}
        value={`${show_raw_schema ? 'hide' : 'show'} raw schema`} />
    </div>

    <pre class:hidden={!show_raw_schema}>
      <code>{JSON.stringify($selected_instance, null, 2)}</code>
    </pre>

    <div class:hidden={show_raw_schema}>
      {#if $selected_instance}
        <Instance
          top_level
          definition={$selected_instance}
          href={$selected_instance_url} />
      {:else}
        <div>no schema selected</div>
      {/if}
    </div>

  </div>
</div>

<svelte:window on:hashchange={hash_change} />

<script>
  /* eslint-env browser */

  import { onMount } from "svelte";

  function hash_change() {
    set_selected_instance_url(decodeURI(document.location.hash.slice(1)));
  }

  import {
    schemas,
    add_schema,
    selected_instance,
    selected_instance_url,
    set_selected_instance_url,
  } from "./_schemas";

  import Instance from "../components/Instance/index.svelte";
  import SchemasListing from "../components/SchemasListing/index.svelte";

  let show_raw_schema = false;

  function updateInstance(event) {
    const schema = event.detail;
    set_selected_instance_url(schema);
  }

  const load_schema = (schema) => {
    const url = "/schemas/" + schema;

    fetch(url)
      .then((res) => res.json())
      .then((schema) => add_schema(schema, url));
  };

  onMount(() => {
    set_selected_instance_url(decodeURI(document.location.hash.slice(1)));
    fetch("/schemas.json")
      .then((res) => res.json())
      .then((schemas) => schemas.map(load_schema));
  });
</script>

<style>
  .top_viewer {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .schemas_column {
    flex: 1;
    max-width: 30%;
    padding-right: 2.5%;
    padding-left: 2.5%;
    background-color: var(--color-base2);
    height: 100%;
  }
  .instance_viewer {
    flex: 3;
    padding-left: 2.5%;
  }
  .instance_viewer input {
    text-align: right;
  }
  pre {
    background-color: #f0f0f0;
  }
  .show-div {
    text-align: right;
  }

  .hidden {
    display: none;
  }
</style>
