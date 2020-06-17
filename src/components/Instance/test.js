import tap from "tap";

require("../../tests/svelte_loader");

import { render } from "@testing-library/svelte";

const Instance = require("./index.svelte");

tap.test("we grok boolean type", async (t) => {
  const { getByText } = render(Instance, { definition: { type: "boolean" } });

  t.ok(getByText("boolean"));
});

tap.test("default", async (t) => {
  const { getByText } = render(Instance, { definition: { default: "potato" } });

  t.ok(getByText('"potato"'));
});
