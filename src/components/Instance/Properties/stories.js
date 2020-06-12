import { withKnobs, object } from "@storybook/addon-knobs";

import Properties from '.';

import example from '../../../../examples/example.json';

export default { title: "Properties", decorators: [withKnobs]};

export const ref = () => ({
  Component: Properties,
  props: {
      properties: example.definitions.Product.properties
  },
});
