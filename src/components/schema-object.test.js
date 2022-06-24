import { test, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import Schema from './Schema.svelte';

const renderSchema = (definition) => render(Schema, { definition });

test('basic', async () => {
    const { getByText } = renderSchema({
        type: 'object',
        properties: {
            foo: { type: 'string' },
        },
        patternProperties: {
            '^PATTERN': { type: 'string', title: 'pattern' },
        },
        additionalProperties: false,
    });

    expect(getByText('foo')).toBeTruthy();
    expect(getByText('forbidden')).toBeTruthy();
    expect(getByText('^PATTERN')).toBeTruthy();
    expect(getByText('pattern')).toBeTruthy();
});
