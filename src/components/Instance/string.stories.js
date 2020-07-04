import { withKnobs, object, select } from "@storybook/addon-knobs";

import Instance from ".";

export default { title: "Types/String", decorators: [withKnobs] };

export const basic = () => ({
  Component: Instance,
  props: {
    definition: object("definition", {
        type: "string",
      minLength: 2,
      maxLength: 10,
      pattern: "foo.*bar",
    }),
  },
});

export const invalid = () => ({
  Component: Instance,
  props: {
    definition: object("definition", {
        type: "string",
      minLength: -1,
      maxLength: -1,
      pattern: "foo.*bar",
    }),
  },
});

export const zeros = () => ({
  Component: Instance,
  props: {
    definition: object("definition", {
        type: "string",
      minLength: 0,
      maxLength: 0,
      pattern: "foo.*bar",
    }),
  },
});
