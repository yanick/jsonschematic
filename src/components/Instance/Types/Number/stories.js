import { withKnobs, number } from "@storybook/addon-knobs";

import Number from ".";

export default { title: "Number type", decorators: [withKnobs] };

export const basic = () => ({
  Component: Number,
  props: {
    multipleOf: number("multipleOf", 2),
    maximum: number("maximum", 10),
    mininum: number("mininum", 2),
    exclusiveMaximum: number("exclusiveMaximum", 12),
    exclusiveMinimum: number("exclusiveMinimum", 3),
  },
});
