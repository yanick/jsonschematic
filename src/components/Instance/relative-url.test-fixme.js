const tap = require("../../tests/svelte_loader");
import { render, fireEvent } from "@testing-library/svelte";

const Instance = require("./index.svelte");

tap.test("find links and buttons and click expand", async (t) => {
  const definition = {
    $id: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      zombies: {
        allOf: [{ $ref: "#/definitions/schemaArray" }],
        default: true,
      },
    },
  };

  const { container, getByText } = render(Instance, {
    definition,
    href: definition.$id,
  });

  const links = Array.from(container.querySelectorAll("a")).map((a) =>
    a.getAttribute("href")
  );

  tap.equal(
    links[0],
    "#http://json-schema.org/draft-07/schema#/definitions/schemaArray",
    "relative definition link is properly resolved"
  );

  const expand = getByText("expand");
  tap.ok(expand);
  t.ok(await fireEvent.click(expand));

  const unexpand = getByText("unexpand");
  tap.ok(unexpand);
  t.ok(await fireEvent.click(unexpand));

  tap.ok(getByText("expand"));
});
