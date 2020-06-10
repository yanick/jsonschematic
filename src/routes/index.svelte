<div class="top_viewer">
  <div class="schemas_column">
    <SchemasListing
      on:select_instance="{updateInstance}"
      schemas="{$schemas}"
      selected_instance_url="{$selected_instance_url}" />
  </div>

  <div class="instance_viewer">
    {#if $selected_instance}
      <Instance {...$selected_instance} />
    {:else}
      <div>no schema selected</div>
    {/if}
  </div>
</div>

<script>
  import { onMount } from "svelte";

  import {
    schemas,
    add_schema,
    selected_instance,
    selected_instance_url,
    set_selected_instance_url,
  } from "./_schemas";

  import Instance from "../components/Instance/index.svelte";
  import SchemasListing from "../components/SchemasListing/index.svelte";

  let schema_list = new Promise(() => {});

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
</style>
