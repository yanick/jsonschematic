const tap = require('../../../tests/svelte_loader');
import { render } from '@testing-library/svelte';

const ArrayRestraints = require('./index.svelte');

tap.test('additionalItems', async (t) => {
    t.test('additionalItems, true', async (t) => {
        const { getByText } = render(ArrayRestraints, {
            additionalItems: true,
        });

        t.ok(getByText('additional items allowed'));
    });

    t.test('additionalItems, false', async (t) => {
        const { getByText } = render(ArrayRestraints, {
            items: [{ type: 'string' }],
            additionalItems: false,
        });

        t.ok(getByText('additional items not allowed'));
    });

    t.test('additionalItems, boolean w/ items as object', async (t) => {
        const { queryByText } = render(ArrayRestraints, {
            items: {
                type: 'string',
            },
            additionalItems: false,
        });

        t.ok(!queryByText('additional items not allowed'), 'not present');
    });

    t.test('additionalItems, schema', async (t) => {
        const { getByText } = render(ArrayRestraints, {
            items: [{ type: 'string' }],
            additionalItems: { type: 'number' },
        });

        t.ok(getByText('additional items'));
    });
});
