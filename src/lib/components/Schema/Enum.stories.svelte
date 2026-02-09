<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Enum from './Enum.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Schema/Enum',
    component: Enum,
    tags: ['autodocs']
  });

  const sample = {
    title: 'string w/ enum',
    type: 'string',
    enum: ['potato', 'cauliflower', 'beet']
  };
</script>

<Story name="Primary" args={{ schema: sample }} />
