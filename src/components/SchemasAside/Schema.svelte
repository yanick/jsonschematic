<!-- TODO don't show details arrow if no definitions -->
<details class="schema" open>
    <summary>
        <div class="title">
            <a href="#top" on:click={() => schemas.gotoDefinition(url)}>
                {definition.title || ''}</a
            >
        </div>
        <div class="id">
            {id}
        </div>
    </summary>

    {#each Object.keys(definition.definitions || {}) as key (key)}
        {@const url = '#/' + key}
        <div class="definition">
            <a href="#top" on:click={schemas.gotoDefinition(url)}>{url} </a>
            &mdash;
            {definition.definitions[key].title}
        </div>
    {/each}
</details>

<script>
    import { getContext } from 'svelte';

    export let definition = {};
    export let url = '';

    const schemas = getContext('schemas');

    $: id = definition.id || url || '';
</script>

<style>
    .id {
        margin-left: 1em;
    }
    summary .title::before {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
        margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
        /*  float: left; */
        transform: rotate(-90deg);
        background-image: var(--icon-chevron);
        background-position: right center;
        background-size: 1rem auto;
        background-repeat: no-repeat;
        content: '';
        transition: transform var(--transition);
        margin-right: 0.5em;
    }

    summary::after {
        display: none;
    }

    details[open] > summary .title::before {
        transform: rotate(0);
    }
    .definition {
        margin-left: 0em;
        font-size: var(--font-size-8);
    }
</style>
