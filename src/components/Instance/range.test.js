const tap = require("../../tests/svelte_loader");
import { render } from "@testing-library/svelte";

const Instance = require("./index.svelte");

const ranges_test = type => tap.test(type, async(tap) => {
  tap.test("min/max", async (t) => {
    const { getByText } = render(Instance, {
      definition: { type, minimum: 1, maximum: 12 },
    });
    t.ok(getByText("≥ 1"));
    t.ok(getByText("≤ 12"));
  });

  tap.test("x min/max ", async (t) => {
    const { getByText } = render(Instance, {
      definition: { type, exclusiveMinimum: -1, exclusiveMaximum: 14 },
    });
    t.ok(getByText("> -1"));
    t.ok(getByText("< 14"));
  });

  tap.test("mixed ", async (t) => {
    const { getByText } = render(Instance, {
      definition: { type, exclusiveMinimum: -9, maximum: 847 },
    });
    t.ok(getByText("> -9"));
    t.ok(getByText("≤ 847"));
  });

  tap.test("v4 x mininum", async (t) => {
    const { getByText } = render(Instance, {
      definition: { type, exclusiveMinimum: true, minimum: 19, maximum: 100 },
    });
    t.ok(getByText("> 19"));
    t.ok(getByText("≤ 100"));
  });

  tap.test("v4 x maximum", async (t) => {
    const { getByText } = render(Instance, {
      definition: { type, exclusiveMaximum: true, minimum: 17, maximum: 202 },
    });
    t.ok(getByText("≥ 17"));
    t.ok(getByText("< 202"));
  });
});

[ 'integer', 'number' ].forEach( ranges_test );

