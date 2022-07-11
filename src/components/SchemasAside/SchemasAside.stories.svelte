<Meta
    title="SchemasAside"
    argTypes={{
        schemas: { type: 'object' },
    }}
/>

<Template let:args>
    <SchemasAside {...args} />
</Template>

<Story
    name="Basic"
    args={{
        schemas: [
            {
                url: './here',
                definition: {
                    title: 'the schema',
                    definitions: {
                        one: { type: 'string' },
                    },
                },
            },
        ],
    }}
/>

<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

    import SchemasAside from '../SchemasAside.svelte';
</script>
