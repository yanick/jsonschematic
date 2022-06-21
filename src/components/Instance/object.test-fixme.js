const tap = require('../../tests/svelte_loader');

const ObjectType = require('./index.svelte');

import { render } from '@testing-library/svelte';

tap.test('required', async (t) => {
    const { container } = render(ObjectType, {
        definition: {
            type: 'object',
            properties: {
                foo: {},
                bar: {},
            },
            required: ['foo'],
        },
    });

    t.is(
        container.querySelector('.required').textContent,
        'foo',
        'foo is required',
    );
});
