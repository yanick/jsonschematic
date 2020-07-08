import { withKnobs, object } from "@storybook/addon-knobs";

import Properties from ".";

import example from "../../../../examples/example.json";

export default { title: "Properties", decorators: [withKnobs] };

export const refProperties = () => ({
  Component: Properties,
  props: {
    properties: object("properties", example.definitions.Product.properties),
  },
});
export const refProp = () => ({
  Component: Properties,
  props: {
    properties: object("properties", example.definitions.Prop.properties),
  },
});
