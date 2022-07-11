<div class="jsonschematic container-fluid container">
    <a id="top" />

    <SchemasAside schemas={$storeSchemas} />

    {#if definition}
        <Schema {definition} {uri} topLevel />
    {:else}
        <div class="container" aria-busy="true">Loading schema...</div>
    {/if}
</div>

<script>
    import { getContext, setContext } from 'svelte';

    import SchemaStore from '../stores/schemas.js';
    import Schema from './Schema.svelte';
    import SchemasAside from './SchemasAside.svelte';

    export let schemas = [];

    const store = new SchemaStore();
    const storeSchemas = store.schemas;

    $: schemas.forEach((url) => store.loadSchema(url));
    $: store.gotoDefinition(schemas[0]);

    setContext('schemas', store);

    const activeDefinition = store.activeDefinition;

    $: definition = $activeDefinition.definition;
    $: uri = $activeDefinition.definitionPath;
    $: console.log($activeDefinition);
</script>

<style>
    .jsonschematic {
        display: flex;
    }
</style>
