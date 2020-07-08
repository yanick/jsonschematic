const tap = require("../../tests/svelte_loader");
import { render } from "@testing-library/svelte";

const Instance = require("./index.svelte");

const definition = {
  $id: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    allOf: { $ref: "#/definitions/schemaArray" },
  },
};

const { container } = render(Instance, { definition, href: definition.$id });

const links = Array.from(container.querySelectorAll("a")).map((a) =>
  a.getAttribute("href")
);

tap.equal(
  links[0],
  "#http://json-schema.org/draft-07/schema#/definitions/schemaArray",
  "relative definition link is properly resolved"
);
