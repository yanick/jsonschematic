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

    <div class="constraints">
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

        {#if minLength}<div><strong>min length</strong> {minLength}</div>{/if}
        {#if maxLength}<div><strong>max length</strong> {maxLength}</div>{/if}

        {#if writeOnly}<div class="permission">
                <strong>writeOnly</strong>
            </div>{/if}

        {#if readOnly}<div class="permission">
                <strong>readOnly</strong>
            </div>{/if}

        {#if minimum}<div><strong>mininum</strong> {minimum}</div>{/if}
        {#if exclusiveMinimum}<div>
                <strong>mininum (exclusive)</strong>
                {exclusiveMinimum}
            </div>{/if}
        {#if maximum}<div><strong>maximum</strong> {maximum}</div>{/if}
        {#if exclusiveMaximum}<div>
                <strong>maximum (exclusive)</strong>
                {exclusiveMaximum}
            </div>{/if}

        {#if multipleOf}<div>
                <strong>multiple of</strong>
                {multipleOf}
            </div>{/if}

        <!-- TODO schema with object -->
        {#if schemaDefault}<div>
                <strong>default</strong> <code>{schemaDefault}</code>
            </div>{/if}

        {#if typeof items === 'boolean'}
            <div>
                <strong>additional items</strong>
                {items ? 'yes' : 'no'}
            </div>
        {/if}
    </div>
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
        minLength,
        maxLength,
        readOnly,
        writeOnly,
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum,
        schemaDefault,
        multipleOf,
        items,
    } = R.mapKeys(definition, (key) =>
        key
            .replace('$', '')
            .replace('default', 'schemaDefault')
            .replace('const', 'schemaConst')
            .replace('enum', 'schemaEnum'),
    ));

    $: noBody = [
        minLength,
        maxLength,
        schemaEnum,
        schemaConst,
        comment,
        description,
        multipleOf,
        writeOnly,
        readOnly,
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum,
        schemaDefault,
        items,
    ].every((x) => !x);
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
    .constraints {
        display: flex;
    }
    .constraints > * {
        margin-right: 2em;
    }
    .permission {
        font-variant: all-small-caps;
    }
</style>
