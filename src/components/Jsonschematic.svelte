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

    const store = SchemaStore();

    $: schemas.forEach(store.setSchema);

    setContext('schemas', store);

    const activeSchema = store.activeSchema;

    $: definition = $activeSchema.definition;
    $: console.log($activeSchema);

    // TODO waiting until the schema is loaded
</script>
