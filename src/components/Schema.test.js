import { test, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import Schema from './Schema.svelte';

const renderSchema = (props) => render(Schema, props);

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

test.todo('default with object', async () => {
    const { getByText, debug } = render(Schema, {
        definition: {
            default: { a: 'potato' },
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

test('main bits', async () => {
    const definition = {
        title: 'with a $comment',
        description: 'this is the description',
        $comment: 'and this is the comment',
    };

    const { getByText } = render(Schema, {
        definition,
    });

    for (const text of Object.values(definition)) {
        expect(getByText(text)).toBeTruthy();
    }
});

test('array:items', async () => {
    let wrapper = render(Schema, {
        definition: { items: true },
    });

    expect(wrapper.getByText('yes')).toBeTruthy();

    wrapper = render(Schema, {
        definition: {
            items: false,
        },
    });

    expect(wrapper.getByText('no')).toBeTruthy();
});

describe('array', () => {
    test('items as schema', () => {
        const { getByText } = render(Schema, {
            definition: {
                type: 'array',
                items: {
                    type: 'number',
                    title: 'the item',
                },
                title: 'items as a schema',
            },
        });

        expect(getByText('the item')).toBeTruthy();
    });
    test('items as tuple', () => {
        const { getByText } = render(Schema, {
            definition: {
                type: 'array',
                items: [{ type: 'number' }, { type: 'string' }],
            },
        });

        expect(getByText('number')).toBeTruthy();
        expect(getByText('string')).toBeTruthy();
    });
    test('additionalItems', () => {
        const { getByText } = renderSchema({
            definition: {
                type: 'array',
                additionalItems: true,
            },
        });

        expect(getByText('allowed')).toBeTruthy();

        expect(
            render(Schema, {
                definition: {
                    type: 'array',
                    additionalItems: false,
                },
            }).getByText('forbidden'),
        ).toBeTruthy();
    });
});
