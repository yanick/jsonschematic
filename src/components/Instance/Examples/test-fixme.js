const tap = require('../../../tests/svelte_loader');

import { render } from '@testing-library/svelte';

const Examples = require('./index.svelte');

const { getByText } = render(Examples, {
    examples: [{ potatoes: 'deep fried' }],
});

tap.ok(getByText(/deep fried/), 'object examples are deserialized');
