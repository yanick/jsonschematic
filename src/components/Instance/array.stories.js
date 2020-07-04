import { withKnobs, object, number, boolean } from "@storybook/addon-knobs";

import Array from ".";

export default { title: "Array type", decorators: [withKnobs] };

export const basic = () => ({
  Component: Array,
  props: {
    definition: {
    type: 'array',
      maxItems: number("maxItems", 10),
      minItems: number("minItems", 3),
      uniqueItems: boolean("uniqueItems", true),
      maxContains: number("maxContains", 7),
      minContains: number("minContains", 2),
    },
  },
});
