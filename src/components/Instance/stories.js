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

export const all_the_things = () => ({
  Component: Instance,
  props: {
    top_level: true,
    definition: {
      $id: "https://foo.com",
      $schema: "v4",
      title: "The title",
      description: "The description",
      type: "object",
      $ref: "#/definitions/something",
      default: {
        foo: 1,
        bar: 2,
      },
      properties: {
        foo: {
          type: "number",
        },
        bar: {
          type: "string",
        },
      },
    },
  },
});

export const enumerations = () => ({
  Component: Instance,
  props: { definition: object( 'definition', {
             title: "Things",
             type: "string",
             enum: ["a","b"]
         })
  }
});

