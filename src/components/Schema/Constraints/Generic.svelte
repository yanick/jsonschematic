{#if examples}
    <Constraint label="examples" fullwidth>
        {#each examples as example (example)}
            <pre><code>{JSON.stringify(example, null, 2)} </code> </pre>
        {/each}
    </Constraint>
{/if}

<script>
    import Constraint from '../Constraint.svelte';

    export let definition = {};

    $: examples = definition.examples;
</script>

<style>
    code {
        padding: 0px;
        margin: 0px;
    }
    pre {
        padding: 0.5em 1em 0em 1em;
    }
</style>
