import { render } from '@testing-library/svelte';
import Schema from './index.svelte';

test('const', () => {
    const { queryByText } = render(Schema, {
        schema: {
            type: 'string',
            const: 'potato'
        }
    });

    expect(queryByText('undefined')).toBeFalsy();
    expect(queryByText('const')).toBeTruthy();
});
test('minLength', () => {
    const { queryByText } = render(Schema, {
        schema: {
            type: 'string',
            minLength: 10
        }
    });

    expect(queryByText('length')).toBeTruthy();
    expect(queryByText('10')).toBeTruthy();
});
