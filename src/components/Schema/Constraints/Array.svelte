{#if typeof additionalItems === 'boolean'}
    <Constraint label="additional items">
        {additionalItems ? 'allowed' : 'forbidden'}
    </Constraint>
{/if}

{#if Array.isArray(items)}
    <div style:width="100%">
        <strong>items</strong>
        <ol>
            {#each items as item (item)}
                <li>
                    <Schema definition={item} />
                </li>
            {/each}
        </ol>
    </div>
{:else if typeof items === 'object'}
    <Constraint label="items" fullwidth>
        <Schema definition={items} />
    </Constraint>
{/if}

<script>
    import Schema from '../../Schema.svelte';
    import Constraint from '../Constraint.svelte';

    export let definition = {};

    $: items = definition.items;
    $: additionalItems = definition.additionalItems;
</script>

<style>
</style>
