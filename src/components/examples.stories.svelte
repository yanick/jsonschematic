<Meta title="examples" />

<Story name="string">
    {#each examples.filter(({ type }) => type === 'string') as definition (definition.title)}
        <Schema {definition} />
    {/each}
</Story>

<Story name="boolean">
    {#each examples.filter(({ type }) => type === 'boolean') as definition (definition.title)}
        <Schema {definition} />
    {/each}
</Story>

<Story name="number">
    {#each examples.filter(({ type }) => type === 'number') as definition (definition.title)}
        <Schema {definition} />
    {/each}
</Story>
<Story name="array">
    {#each examples.filter(({ type }) => type === 'array') as definition (definition.title)}
        <Schema {definition} />
    {/each}
</Story>
<Story name="object">
    {#each examples.filter(({ type }) => type === 'object') as definition (definition.title)}
        <Schema {definition} />
    {/each}
</Story>

<Story name="the rest">
    {#each examples.filter(({ type }) => !['object', 'array', 'string', 'boolean', 'number'].includes(type)) as definition (definition.title)}
        <Schema {definition} />
    {/each}
</Story>

<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

    import Schema from './Schema.svelte';
    import examples from './examples.js';
</script>
