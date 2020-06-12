import { withKnobs, object } from "@storybook/addon-knobs";

import Definitions from '.';

export default { title: "Definitions", decorators: [withKnobs]};

export const basic = () => ({
  Component: Definitions,
  props: { 
    definitions: object('definitions', { 
      "F": {id:'F'},
      "A": {id:'A'},
      "B": {id:'B'}
    })
   }
});

