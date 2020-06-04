import { withKnobs, object } from "@storybook/addon-knobs";

import String from '.';

export default { title: "String type", decorators: [withKnobs]};

export const basic = () => ({
  Component: String,
  props: {
      definition: object('definition', {
        minLength: 2,
        maxLength: 10,
        pattern: 'foo.*bar'
      })
  },
});
