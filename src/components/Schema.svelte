<details class="container-fluid" {open}>
    {#if showRawSchema}
        <RawSchemaModal {definition} bind:open={showRawSchema} />
    {/if}
    <summary>
        <div class="schema-title">
            {#if key}<div class="key" class:required>{key}</div>{/if}
            {#if type}
                <div class="type">
                    <span class="type">{type || ''}</span>
                </div>
            {/if}
            <div class="title">{title || ''}</div>
            <div>
                <button class="outline" on:click={() => (showRawSchema = true)}
                    >raw</button
                >
            </div>
        </div>
        <div class="id-section">
            {#if id}
                <div><strong>id:</strong> {id}</div>
            {:else if uri}
                <div>#{uri}</div>
            {/if}

            {#if schema}
                <a href={schema}>{schema}</a>
            {/if}
        </div>
    </summary>

    {#if description}
        <div class="description">{description}</div>
    {/if}
    {#if comment} <blockquote>{comment}</blockquote>{/if}

    <div class="constraints">
        {#if schemaRef}
            <Constraint label="$ref">
                <a
                    on:click={schemas.gotoDefinition(schemaRef, uri)}
                    href="#top"
                >
                    {schemaRef}
                </a>
            </Constraint>
        {/if}
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

        {#if schemaDefault}<div>
                <strong>default</strong> <code>{schemaDefault}</code>
            </div>{/if}

        {#if typeof items === 'boolean'}
            <div>
                <strong>additional items</strong>
                {items ? 'yes' : 'no'}
            </div>
        {/if}

        <GenericConstraints {definition} />

        <svelte:component this={TypeConstraints} {definition} />
    </div>
</details>

<script>
    import { getContext } from 'svelte';
    import * as R from 'remeda';

    import GenericConstraints from './Schema/Constraints/Generic.svelte';
    import ArrayConstraints from './Schema/Constraints/Array.svelte';
    import StringConstraints from './Schema/Constraints/String.svelte';
    import ObjectConstraints from './Schema/Constraints/Object.svelte';
    import RawSchemaModal from './Schema/RawSchemaModal.svelte';
    import Constraint from './Schema/Constraint.svelte';

    export let key = '';
    export let definition = {};
    export let compact = false;
    export let required = false;
    export let topLevel = false;
    export let open = topLevel || true;

    export let uri;

    const schemas = getContext('schemas');

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
        schemaRef,
    } = R.mapKeys(definition, (key) =>
        key
            .replace('$ref', 'schemaRef')
            .replace('$', '')
            .replace('default', 'schemaDefault')
            .replace('const', 'schemaConst')
            .replace('enum', 'schemaEnum'),
    ));

    $: noBody =
        Object.keys(definition).filter(
            (key) => !['type', 'title', '$id', '$schema'].includes(key),
        ).length === 0;

    const constraints = {
        array: ArrayConstraints,
        string: StringConstraints,
        object: ObjectConstraints,
    };

    $: TypeConstraints = constraints[type];

    let showRawSchema = false;
</script>

<style>
    summary {
    }
    details {
        max-width: 70em;
    }
    .type {
        width: 5em;
    }
    .type span {
        border-radius: 8px;
        padding: 0em 0.3em 0.2em;
        background-color: var(--mark-background-color);
    }

    .schema-title {
        display: flex;
        width: 100%;
        align-items: center;
        align-content: center;
    }

    header .title {
        font-size: var(--font-size-12);
        flex: 1;
    }

    .innerLevel > header {
        margin-bottom: 0px;
        padding-bottom: 0px;
    }

    summary .title {
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
        flex-wrap: wrap;
        flex-basis: 100%;
    }
    .constraints > * {
        margin-right: 2em;
    }
    .permission {
        font-variant: all-small-caps;
    }
    label {
        font-weight: bold;
    }
    .key {
        font-weight: bold;
        margin-right: 1em;
    }
    .key.required {
        text-decoration: underline;
    }

    details .schema-title::before {
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
    }

    summary::after {
        display: none;
    }

    details[open] > summary > .schema-title::before {
        transform: rotate(0);
    }

    details {
        margin-top: var(--block-spacing-vertical);
        margin-bottom: var(--block-spacing-vertical);
        padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
        /*
margin: var(--block-spacing-vertical) 0;
    padding-bottom: 0px;
background: var(--card-background-color);
    */
        border-radius: var(--border-radius);
        box-shadow: var(--card-box-shadow);
    }

    summary {
        /*
    margin-top: calc(var(--block-spacing-vertical) * -1);
    margin-bottom: var(--block-spacing-vertical);
margin-right: calc(var(--block-spacing-horizontal) * -1);
margin-left: calc(var(--block-spacing-horizontal) * -1);
padding: calc(var(--block-spacing-vertical) * 0.66) var(--block-spacing-horizontal);
    padding-bottom: 0px;
    border-bottom: var(--border-width) solid var(--card-border-color);
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
background: var(--card-background-color);
background-color: var(--card-sectionning-background-color);
*/
    }

    summary + * {
        margin-top: 2em;
    }
    button {
        font-size: var(--font-size-8);
        padding: 0.25em 0.5em;
    }
</style>
