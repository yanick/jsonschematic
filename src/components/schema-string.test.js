import { test, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import Schema from './Schema.svelte';

const renderSchema = (props) => render(Schema, props);

test('content', () => {
    const definition = {
        definition: {
            title: 'string w/ content type and encoding',
            type: 'string',
            contentEncoding: 'base64',
            contentMediaType: 'image/png',
        },
    };

    const { getByText } = renderSchema(definition);

    for (const text of ['base64', 'image/png']) {
        expect(getByText(text)).toBeTruthy();
    }
});

test('const', async () => {
    const { getByText } = render(Schema, {
        definition: {
            const: 'potato',
        },
    });

    expect(getByText('potato')).toBeTruthy();
});

test('enum', async () => {
    const { getByText } = render(Schema, {
        definition: {
            enum: ['potato'],
        },
    });

    expect(getByText('potato')).toBeTruthy();
});

test('length', async () => {
    const { getByText } = render(Schema, {
        definition: {
            minLength: 2,
            maxLength: 3,
        },
    });

    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
});
