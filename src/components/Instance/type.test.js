const tap = require("../../tests/svelte_loader");
import { render } from "@testing-library/svelte";

const Instance = require("./index.svelte");

['integer','number','string'].forEach( type => {
tap.test(type, async (t) => {
  const { getByText } = render(Instance, { definition: { type } });
  t.ok(getByText(type));
})
});
