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
