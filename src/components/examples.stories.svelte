<Meta
    title="examples"
/>

<Template let:args>
    <Schema {...args} />
</Template>

<Story
    name="string w/ const"
    args={{ definition:
  {
    title: "string w/ const",
    type: "string",
    const: "potato",
  },
    }}
/>

<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

    import Schema from './Schema.svelte';
</script>
