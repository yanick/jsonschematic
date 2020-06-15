import { withKnobs, object } from "@storybook/addon-knobs";

import Instance from ".";

export default { title: "Instance", decorators: [withKnobs] };

export const ref = () => ({
  Component: Instance,
  props: {
    fetch_segment: () => ({
      minimum: 0,
    }),
    definition: {
      title: "Thingy",
      type: "number",
      $ref: "#/definitions/PositiveNumber",
    },
  },
});

export const default_ = () => ({
  Component: Instance,
  props: {
    definition: {
      title: "Thingy",
      type: "object",
      default: {
        foo: 1,
        bar: 2,
      },
    },
  },
});
