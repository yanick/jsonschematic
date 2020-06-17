require("../../../../tests/svelte_loader");

import tap from "tap";
import { render } from "@testing-library/svelte";

const String = require("./index.svelte");

tap.test("the String component says 'string'", async (t) => {
  const { getByText } = render(String, {});

  t.ok(getByText("string"));
});

tap.test("default M-lengths", async (t) => {
  const { queryByText } = render(String, {});

  t.ok(!queryByText("≥ 0"));
  t.ok(!queryByText("MaxLength", { exact: false }));
});

tap.test("minLength prop", async (t) => {
  const { getByText } = render(String, {
    props: { definition: { minLength: 3, maxLength: 100, pattern: "*" } },
  });

  t.ok(getByText("≥ 3"));

  //renders &lt; and &gt; but not &infin; (it presents nothing in the infin case so
  //not the default
  ["≤ 100", "value matches pattern *"].forEach((text) => t.ok(getByText(text)));
});

tap.test("format", async (t) => {
  const { getByText } = render(String, {
    props: {
      definition: { format: "date-time" },
    },
  });

  t.ok(getByText("date-time"));
});
