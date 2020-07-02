const tap = require('../../tests/svelte_loader');
import { render } from "@testing-library/svelte";

const Instance = require("./index.svelte");
console.log({Instance});


tap.test("property dependencies", async (t) => {
  const { debug, container } = render(Instance, {
    definition: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        credit_card: {
          type: "number",
        },
        billing_address: {
          type: "string",
        },
      },
      // required: ["name"],
      // dependencies: {
      //   credit_card: ["billing_address"],
      // },
    },
  });

    console.log(debug());

});
