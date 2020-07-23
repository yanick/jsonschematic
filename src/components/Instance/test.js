import tap from "tap";

require("../../tests/svelte_loader");

import { render } from "@testing-library/svelte";

const Instance = require("./index.svelte");

tap.test("we grok boolean type", async (t) => {
  const { getByText } = render(Instance, {
    definition: { type: "boolean", default: false },
  });
  t.ok(getByText("boolean"));
  t.ok(getByText("default"));
});

tap.test("default", async (t) => {
  const { getByText } = render(Instance, { definition: { default: "potato" } });

  t.ok(getByText('"potato"'));
});

tap.test("$comment", async (t) => {
  const { getByText } = render(Instance, {
    definition: { $comment: "we have comments" },
  });

  t.ok(getByText("we have comments"));
});
