import { test, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import Schema from './Schema.svelte';

const renderSchema = (definition) => render(Schema, { definition });

test('basic', async () => {
    const { getByText, container } = renderSchema({
        type: 'object',
        properties: {
            foo: { type: 'string' },
        },
        patternProperties: {
            '^PATTERN': { type: 'string', title: 'pattern' },
        },
        additionalProperties: false,
        required: ['foo'],
        minProperties: 2,
        maxProperties: 3,
    });

    expect(getByText('foo')).toBeTruthy();
    expect(getByText('forbidden')).toBeTruthy();
    expect(getByText('^PATTERN')).toBeTruthy();
    expect(getByText('pattern')).toBeTruthy();
    expect(getByText('min properties')).toBeTruthy();
    expect(getByText('max properties')).toBeTruthy();
    expect(getByText('required properties')).toBeTruthy();

    expect(container.querySelector('.required.key')).toBeTruthy();
});
