const hooks = require("require-extension-hooks");
const svelte = require("svelte-test/require");

const compilerOptions = { accessors: true };

const extensionHook = svelte(undefined, compilerOptions);

hooks(".svelte").push(extensionHook);

require("jsdom-global")();

const tap = require('tap').default;

const { cleanup } = require("@testing-library/svelte");

tap.afterEach(async () => cleanup());

module.exports = tap;
