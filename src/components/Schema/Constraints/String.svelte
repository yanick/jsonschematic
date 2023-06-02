{#if contentEncoding}<Constraint label="content encoding"
        >{contentEncoding}</Constraint
    >{/if}

{#if contentMediaType}<Constraint label="content media type"
        >{contentMediaType}</Constraint
    >{/if}

{#if format}
    <Constraint label="format">
        {format}
        {#if formatTip}
            <sup
                class="format"
                use:tippy={{
                    placement: 'right',
                    content: formatTip,
                    allowHTML: true,
                    interactive: true,
                }}
                >?
            </sup>
        {/if}</Constraint
    >
{/if}

<script>
    import tippy from 'sveltejs-tippy';

    import Constraint from '../Constraint.svelte';
    import stringFormats from './formats.js';

    export let definition = {};

    $: contentEncoding = definition.contentEncoding;
    $: contentMediaType = definition.contentMediaType;
    $: format = definition.format;

    $: formatTip = stringFormats[format];
</script>

<style>
    sup {
        color: var(--primary);
    }
</style>
