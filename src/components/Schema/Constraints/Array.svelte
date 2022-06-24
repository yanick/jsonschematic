{#if minItems}<Constraint label="min items">{minItems}</Constraint>{/if}
{#if maxItems}<Constraint label="max items">{maxItems}</Constraint>{/if}

{#if minContains}<Constraint label="min items">{minContains}</Constraint>{/if}
{#if maxContains}<Constraint label="max items">{maxContains}</Constraint>{/if}

{#if isBoolean(uniqueItems)}<Constraint label="unique items"
        >{uniqueItems ? 'yes' : 'no'}</Constraint
    >{/if}

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
    <AdditionalProperties
        additionalProperties={additionalItems}
        label="additional items"
    />
{/if}

<script>
    import { isDefined, isBoolean } from 'remeda';

    import Schema from '../../Schema.svelte';
    import Constraint from '../Constraint.svelte';
    import AdditionalProperties from './AdditionalProperties.svelte';

    export let definition = {};

    $: items = definition.items;
    $: additionalItems = definition.additionalItems;
    $: maxItems = definition.maxItems;
    $: minItems = definition.minItems;
    $: maxContains = definition.maxContains;
    $: minContains = definition.minContains;
    $: uniqueItems = definition.uniqueItems;
</script>

<style>
</style>
