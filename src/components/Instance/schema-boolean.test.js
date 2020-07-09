const tap = require("../../tests/svelte_loader.js");
import { render } from "@testing-library/svelte";

const Instance = require("./index.svelte");

tap.ok(
  render(Instance, {
    definition: {
      type: "array",
      items: true,
    },
  }).getByText("schema matches anything"),
  "schema as `true`"
);

tap.ok(
  render(Instance, {
    definition: {
      type: "array",
      items: false,
    },
  }).getByText("schema matches nothing"),
  "schema as `false`"
);
