import { withKnobs, object } from "@storybook/addon-knobs";

import Number from ".";

export default { title: "Number type", decorators: [withKnobs] };

export const limit = () => ({
  Component: Number,
  props: {
    definition: object("definition", {
      multipleOf: 3,
      minimum: 1,
      maximum: 19,
    }),
  },
});

export const excl = () => ({
  Component: Number,
  props: {
    definition: object("definition", {
      multipleOf: 3,
      exclusiveMinimum: 1,
      exclusiveMaximum: 19,
    }),
  },
});

export const mixed = () => ({
  Component: Number,
  props: {
    definition: object("definition", {
      multipleOf: 3,
      minimum: 1,
      exclusiveMaximum: 19,
    }),
  },
});

export const v4 = () => ({
  Component: Number,
  props: {
    definition: object("definition", {
      minimum: 3,
      exclusiveMinimum: true,
      maximum: 19,
    }),
  },
});
