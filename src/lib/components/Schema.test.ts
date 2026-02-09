import { render, screen } from '@testing-library/svelte';
//import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import Schema from './Schema.svelte';

test('netaschema abbrev', async () => {
	//	const user = userEvent.setup();
	render(Schema, {
		props: {
			schema:
			{
				type: 'object',
				$id: 'http://yanick.github.io/jsonschematic',
				$schema: 'http://json-schema.org/draft-07/schema#',
				title: '$id and regular $schema',
				description:
					'if the $schema is one of the official json schema urls, the display will simply be v*number*'
			}
		}
	});

	expect(
		screen.getByTestId('metaschema').innerHTML
	).toMatch(/v07/);
});
