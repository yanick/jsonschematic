import './style/index.js';

import JS from './components/JsonSchematic.svelte';

export const JsonSchematic = JS;

export function startJsonschematic(appId, ...schemas) {
    const app = new JS({
        target: document.getElementById(appId),
        props: {
            schemas,
        },
    });
}
