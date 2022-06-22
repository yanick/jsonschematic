    {#if Array.isArray(items) }
        <div style:width="100%">
            <label>items</label>
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

</script>

<style>
</style>
