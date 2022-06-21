<article class:topLevel class:innerLevel={!topLevel}>
    <header>
        <div class="schema-title">
            <div>
                {name}
                {#if name && title}&mdash;{/if}
                {title}
                </div>
            {#if type}
                <div class="type">{type}</div>
            {/if}
        </div>
        <div class="id-section">
            {#if id}
                <div><strong>id:</strong> {id}</div>
            {/if}

            {#if schema}
                <a href={schema}>{schema}</a>
            {/if}
        </div>
    </header>

    {#if description}
    <div class="description">{description}</div>
{/if}
    {#if comment} <blockquote>{comment}</blockquote>{/if}

    {#if properties}
        <div style:padding-bottom="0.5em">
            <div><strong>properties</strong></div>
            {#each Object.entries(properties) as [name, definition] (name)}
                <svelte:self {name} {definition} />
            {/each}
        </div>
    {/if}
</article>

<script>
    import * as R from 'remeda';

    export let definition = {};
    export let topLevel = false;
    export let name = '';

    let title, description, comment, type, id, schema, examples, properties;
    $: ({
        title,
        description,
        type,
        comment,
        id,
        schema,
        examples,
        properties,
    } = R.mapKeys(definition, (key) => key.replace('$', '')));
</script>

<style>
    .type {
        border-radius: 8px;
        padding: 0em 0.3em 0.2em;
        background-color: var(--mark-background-color);
    }

    .schema-title {
        display: flex;
        width: 100%;
        align-items: baseline;
    }

    .topLevel > header > div:first-child div:first-child {
        font-size: var(--font-size-12);
    }

    .innerLevel > header {
        margin-bottom: 0px;
        padding-bottom: 0px;
    }

    header div:first-child div:first-child {
        color: var(--primary);
        flex: 1;
    }
    blockquote {
        font-style: italic;
    }
    dl {
        display: grid;
        grid-template-columns: auto 1fr;
    }
    dt {
        grid-column: 1;
        font-weight: bold;
        margin-bottom: 0.5em;
    }
    dd {
        grid-column: 2;
    }

    .id-section {
        margin-top: 0.5em;
        display: flex;
    }

    .id-section div {
        flex: 1;
    }
    article {
        padding-bottom: 0px;
    }
</style>
