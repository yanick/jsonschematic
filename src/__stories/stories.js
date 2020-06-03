import { withKnobs, object } from "@storybook/addon-knobs";

import RefResolver from "./RefResolver.svelte";
import example1 from './example.json';

export default { title: "Instances", decorators: [withKnobs]};

export const example_1 = () => ({
  Component: RefResolver,
  props: {
      definition: object('definition', example1 )
  },
});
