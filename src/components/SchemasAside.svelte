<aside>
    <div class="title">schemas</div>

    <!-- TODO with the extra-long urls? -->
    <!-- TODO with the id vs $id -->
    <!-- TODO show definitions -->
    <!-- TODO highlight current schema -->
    <!-- TODO in definitions, to figure out which level is the definition,
    <!-- TODO make story  (what's with vitebook now?)
    check for the first level where there's a prop called 'type' -->
    {#each schemas as schema (schema.url)}
        <Schema definition={schema.definition} url={schema.url} />
    {/each}
</aside>

<script>
    import Schema from './SchemasAside/Schema.svelte';
    export let schemas = [];
</script>

<style>
    aside {
        width: 20em;
        font-size: var(--font-size-9);
        margin-right: 2em;
    }

    .title {
        font-size: var(--font-size-11);
        font-weight: bold;
        margin-bottom: 0.5em;
    }
</style>
