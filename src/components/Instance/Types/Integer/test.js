import tap from "tap";

require("../../../../tests/svelte_loader");

import { render } from "@testing-library/svelte";

import { ranges } from "../Number/test.js";

const Integer = require("./index.svelte");

tap.test("integer", async (t) => {
  const { getByText } = render(Integer, {});
  t.ok(getByText("integer"));
});

ranges(Integer);
