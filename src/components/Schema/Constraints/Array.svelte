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

{#if isDefined(additionalItems)}
    <Constraint label="additional items" fullwidth>
        {#if isBoolean(additionalItems)}
            {additionalItems ? 'allowed' : 'forbidden'}
        {:else}
            <Schema definition={additionalItems} />
        {/if}
    </Constraint>
{/if}

<script>
    import { isDefined, isBoolean } from 'remeda';

    import Schema from '../../Schema.svelte';
    import Constraint from '../Constraint.svelte';

    export let definition = {};

    $: items = definition.items;
    $: additionalItems = definition.additionalItems;
</script>

<style>
</style>
