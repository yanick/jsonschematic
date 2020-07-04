const tap = require("../../tests/svelte_loader");
import { render } from "@testing-library/svelte";

const Instance = require("./index.svelte");

tap.test("default M-lengths", async (t) => {
  const { queryByText } = render(Instance, {definition: {type: 'string'}});

  t.ok(!queryByText("≥ 0"));
  t.ok(!queryByText("MaxLength", { exact: false }));
});

tap.test("minLength prop", async (t) => {
  const { getByText } = render(Instance, {
      props: { definition: { minLength: 3, maxLength: 100, pattern: "*", type: 'string' } },
  });

  t.ok(getByText("≥ 3"));

  //renders &lt; and &gt; but not &infin; (it presents nothing in the infin case so
  //not the default
  ["≤ 100", "value matches pattern *"].forEach((text) => t.ok(getByText(text)));
});

tap.test("format", async (t) => {
  const { getByText } = render(Instance, {
    props: {
        definition: { type: 'string', format: "date-time" },
    },
  });

  t.ok(getByText("date-time"));
});
