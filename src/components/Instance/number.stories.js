import { withKnobs, object } from "@storybook/addon-knobs";

import Instance from "./index.svelte";

export default { title: "Types/Number", decorators: [withKnobs] };

export const limit = () => ({
  Component: Instance,
  props: {
    definition: object("definition", {
      type: "number",
      multipleOf: 3,
      minimum: 1,
      maximum: 19
    })
  }
});

export const excl = () => ({
  Component: Instance,
  props: {
    definition: object("definition", {
      type: "number",
      multipleOf: 3,
      exclusiveMinimum: 1,
      exclusiveMaximum: 19
    })
  }
});

export const mixed = () => ({
  Component: Instance,
  props: {
    definition: object("definition", {
      type: "number",
      multipleOf: 3,
      minimum: 1,
      exclusiveMaximum: 19
    })
  }
});

export const v4 = () => ({
  Component: Instance,
  props: {
    definition: object("definition", {
      type: "number",
      minimum: 3,
      exclusiveMinimum: true,
      maximum: 19
    })
  }
});
