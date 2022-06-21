<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Schema from './Schema.svelte';
</script>

<Meta title="Schema"
    argTypes={{
        definition: { type: 'object' }
    }}
/>

<Template let:args>
    <Schema {...args} topLevel />
    </Template>

<Story name="Basic" args={{
    definition: {
        type: "object",
        $id: 'https://jsonschematic.babyl.ca',
        title:"with a $comment",
        description:"this is the description",
        $comment:"and this is the comment",
        $schema: 'http://json-schema.org/draft-07/schema#',
        properties: {
            count: { type: 'number', title: 'nbr of things' },
        },
        examples: [
            { this: 'that' },
            3
        ]
        }
}}/>
