<Meta title="Schema/string" component={Schema} />

<Template let:args>
	<Schema {...args} />
</Template>

<Story
	name="string w/ most of everything"
	args={{
		schema: {
			title: 'string all-dressed',
			type: 'string',
			const: 'potato',
			contentEncoding: 'base64',
			contentMediaType: 'image/png',
			format: 'date-time',
			minLength: 3,
			maxLength: 10,
			default: 'hi there!',
			examples: ['potato', 'tomato ']
		}
	}}
/>

<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Schema from './index.svelte';
</script>
