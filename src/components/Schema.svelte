<article class:noBody>
    <header>
        <div class="schema-title">
            <div class="title">{title || ''}</div>
            <div class="type">{type || ''}</div>
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

    {#if schemaConst}
        <div class="const">
            <strong>const</strong><code>{schemaConst}</code>
        </div>
    {/if}

    {#if schemaEnum}
        <div class="enum">
            <strong>enum</strong>
            {#each schemaEnum as constant}
                <code>{constant}</code>
            {/each}
        </div>
    {/if}
</article>

<script>
    import * as R from 'remeda';

    export let definition = {};
    export let compact = false;

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
        schemaConst,
        schemaEnum,
    } = R.mapKeys(definition, (key) =>
        key
            .replace('$', '')
            .replace('const', 'schemaConst')
            .replace('enum', 'schemaEnum'),
    ));

    $: noBody = [schemaEnum, schemaConst, comment, description].every(
        (x) => !x,
    );
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

    header .title {
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

    .id-section {
        margin-top: 0.5em;
        display: flex;
    }

    .id-section div {
        flex: 1;
    }

    article.noBody {
        margin-bottom: 0px;
        padding-bottom: 0px;
    }

    strong {
        margin-right: 1em;
    }
    .enum code {
        margin-right: 1em;
    }
</style>
