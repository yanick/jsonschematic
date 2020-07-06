const tap = require("../../../../tests/svelte_loader");

const ObjectType = require("./index.svelte");

import { render } from "@testing-library/svelte";

tap.test("required", async t => {
  const { debug, container } = render(ObjectType, {
    definition: {
      properties: {
        foo: {},
        bar: {}
      },
      required: ["foo"]
    }
  });

  console.log(debug());

  t.is(
    container.querySelector(".required").textContent,
    "foo",
    "foo is required"
  );
});
