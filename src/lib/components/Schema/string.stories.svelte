<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Schema from './index.svelte';
</script>

<Meta title="Schema/string" component={Schema} />

<Template let:args>
	<Schema {...args} />
</Template>

<Story
	name="Primary"
	args={{
		schema: {
			type: 'string',
			writeOnly: true,
			title: 'writeOnly'
		}
	}}
/>
