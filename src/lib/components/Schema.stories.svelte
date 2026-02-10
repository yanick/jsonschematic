<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Schema from './Schema.svelte';

  const { Story } = defineMeta({
    title: 'Schema',
    component: Schema,
    tags: ['autodocs']
  });

  const sample = {
    title: 'string w/ enum',
    type: 'string',
    enum: ['potato', 'cauliflower', 'beet']
  };
</script>

<Story name="Primary" args={{ schema: sample }} />

<Story
  name="String"
  args={{
    schema: {
      type: 'string',
      title: 'A String',
      writeOnly: true,
      const: 'potato'
    }
  }}
/>
