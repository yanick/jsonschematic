{#if definition}
    <Schema {definition} topLevel />
{:else}
    <div class="container" aria-busy="true">Loading schema...</div>
{/if}

<script>
    import { getContext, setContext } from 'svelte';

    import SchemaStore from '../stores/schemas.js';
    import Schema from './Schema.svelte';

    export let schemas = [];

    const store = new SchemaStore();

    $: schemas.forEach((url) => store.loadSchema(url));
    $: store.gotoDefinition(schemas[0]);

    setContext('schemas', store);

    const activeDefinition = store.activeDefinition;
    activeDefinition.subscribe((a) => {
        console.log('Hello!');
    });

    $: definition = $activeDefinition.definition;
    $: console.log($activeDefinition);
    // TODO waiting until the schema is loaded
</script>
