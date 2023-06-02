import '../src/style/index.js';

import App from './components/Jsonschematic.svelte';

const app = new App({
    target: document.getElementById('app'),
    props: {
        schemas: ['./examples/release-schema.json'],
    },
});

export default app;
