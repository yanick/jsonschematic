import { test, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import Schema from './Schema.svelte';

test( 'no undefined', async () => {
    const wrapper = render( Schema, {
        definition: {
        }
    } );

    expect( wrapper.queryByText('undefined') ).toBeFalsy();
} );
