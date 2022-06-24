{#if properties}
    <Constraint label="properties" fullwidth>
        {#each Object.keys(properties) as prop (prop)}
            <Schema key={prop} definition={properties[prop]} />
        {/each}
    </Constraint>
{/if}

{#if patternProperties}
    <Constraint label="pattern properties" fullwidth>
        {#each Object.keys(patternProperties) as prop (prop)}
            <Schema key={prop} definition={patternProperties[prop]} />
        {/each}
    </Constraint>
{/if}

{#if isDefined(additionalProperties)}
    <AdditionalProperties {additionalProperties} />
{/if}

<script>
    import { isDefined, isBoolean } from 'remeda';

    import Constraint from '../Constraint.svelte';
    import Schema from '../../Schema.svelte';
    import AdditionalProperties from './AdditionalProperties.svelte';

    export let definition = {};

    $: properties = definition.properties;
    $: additionalProperties = definition.additionalProperties;
    $: patternProperties = definition.patternProperties;
</script>

<style>
</style>
