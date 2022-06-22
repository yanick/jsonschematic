{#if contentEncoding}<Constraint label="content encoding"
        >{contentEncoding}</Constraint
    >{/if}

{#if contentMediaType}<Constraint label="content media type"
        >{contentMediaType}</Constraint
    >{/if}

<script>
    import Schema from '../../Schema.svelte';
    import Constraint from '../Constraint.svelte';

    export let definition = {};

    $: contentEncoding = definition.contentEncoding;
    $: contentMediaType = definition.contentMediaType;
</script>
