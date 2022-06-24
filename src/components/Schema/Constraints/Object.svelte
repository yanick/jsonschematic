{#if minProperties}
    <Constraint label="min properties">{minProperties}</Constraint>
{/if}

{#if maxProperties}
    <Constraint label="max properties">{maxProperties}</Constraint>
{/if}

{#if required.length > 0}
    <Constraint label="required properties" fullwidth>
        {#each required as prop (prop)}
            <code>{ prop }</code>
        {/each}
    </Constraint>
{/if}

{#if properties}
    <Constraint label="properties" fullwidth>
        {#each Object.keys(properties) as prop (prop)}
            <Schema
                key={prop}
                definition={properties[prop]}
                required={required.includes(prop)}
            />
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
    $: minProperties = definition.minProperties;
    $: maxProperties = definition.maxProperties;
    $: required = definition.required || [];
</script>

<style>
</style>
