import { test, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import Schema from './Schema.svelte';

test('no undefined', async () => {
    const wrapper = render(Schema, {
        definition: {},
    });

    expect(wrapper.queryByText('undefined')).toBeFalsy();
});

test('string:const', async () => {
    const { getByText } = render(Schema, {
        definition: {
            const: 'potato',
        },
    });

    expect(getByText('potato')).toBeTruthy();
});

test('string:enum', async () => {
    const { getByText } = render(Schema, {
        definition: {
            enum: ['potato'],
        },
    });

    expect(getByText('potato')).toBeTruthy();
});

test('string:length', async () => {
    const { getByText } = render(Schema, {
        definition: {
            minLength: 2,
            maxLength: 3,
        },
    });

    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
});

test('readonly/writeonly', async () => {
    const { getByText } = render(Schema, {
        definition: {
            readOnly: true,
            writeOnly: true,
        },
    });

    expect(getByText('writeOnly')).toBeTruthy();
    expect(getByText('readOnly')).toBeTruthy();
});

test('number:minimum and maximum', async () => {
    const { getByText } = render(Schema, {
        definition: {
            minimum: 2,
            maximum: 3,
        },
    });

    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
});

test('default', async () => {
    const { getByText } = render(Schema, {
        definition: {
            default: 'potato',
        },
    });

    expect(getByText('potato')).toBeTruthy();
});

test('number:multipleOf', async () => {
    const { getByText } = render(Schema, {
        definition: {
            multipleOf: 3,
        },
    });

    expect(getByText('3')).toBeTruthy();
});
