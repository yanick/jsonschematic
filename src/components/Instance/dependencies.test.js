const tap = require("../../tests/svelte_loader.js");
const { render } = require("@testing-library/svelte");
const { screen } = require("@testing-library/dom");

const Instance = require("./index.svelte").default;

tap.test("property dependencies", async t => {
  const { debug, container } = render(Instance, {
    definition: {
      type: "object",
      properties: {
        name: {
          type: "string"
        },
        credit_card: {
          type: "number"
        },
        billing_address: {
          type: "string"
        }
      },
      required: ["name"],
      dependencies: {
        credit_card: ["billing_address"]
      }
    }
  });

  const dependencies = container.querySelector(".dependencies li");
  t.ok(dependencies, "the dependency is present");

  t.is(dependencies.textContent, "billing_address");
});
