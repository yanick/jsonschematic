<Meta title="examples" />

<Story name="all of them">
    {#each examples as definition (definition.title)}
        <Schema {definition} />
    {/each}
</Story>

<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

    import Schema from './Schema.svelte';
    import examples from './examples.js';
</script>
