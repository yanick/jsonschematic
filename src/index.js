import '../src/style/index.js';

import JS from './components/Jsonschematic.svelte';

export const Jsonschematic = JS;

export function startJsonschematic(appId, ...schemas) {
    const app = new JS({
        target: document.getElementById(appId),
        props: {
            schemas,
        },
    });
}
