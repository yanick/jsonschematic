<Meta
    title="Definitions"
    argTypes={{
        definitions: { type: 'object' },
    }}
/>

<Template let:args>
    <Definitions {...args} />
</Template>

<Story
    name="Basic"
    args={{
        definitions: {
            A: { id: 'A' },
            B: { id: 'B' },
            C: { id: 'C' },
        },
    }}
/>

<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

    import Definitions from './index.svelte';
</script>
