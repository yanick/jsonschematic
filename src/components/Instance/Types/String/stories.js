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

export const invalid = () => ({
  Component: String,
  props: {
      definition: object('definition', {
        minLength: -1,
        maxLength: -1,
        pattern: 'foo.*bar'
      })
  },
});

export const defaults = () => ({
  Component: String,
  props: {
  },
});

export const zeros = () => ({
  Component: String,
  props: {
      definition: object('definition', {
        minLength: 0,
        maxLength: 0,
        pattern: 'foo.*bar'
      })
  },
});

