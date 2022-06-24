<Constraint {label} fullwidth>
    {#if isBoolean(additionalProperties)}
        {additionalProperties ? 'allowed' : 'forbidden'}
    {:else}
        <Schema definition={additionalProperties} />
    {/if}
</Constraint>

<script>
    import { isDefined, isBoolean } from 'remeda';

    import Constraint from '../Constraint.svelte';
    import Schema from '../../Schema.svelte';

    export let label = 'additional properties';
    export let additionalProperties;
</script>
