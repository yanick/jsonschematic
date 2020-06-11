import { withKnobs, object } from "@storybook/addon-knobs";

import RefResolver from "./RefResolver.svelte";
import Instance from '../components/Instance';
import example1 from './example.json';

import schema7 from '../../examples/json-schema-v7.json';
import '../../static/global.css';

export default { title: "Instances", decorators: [withKnobs]};

export const example_1 = () => ({
  Component: RefResolver,
  props: {
      definition: object('definition', example1 )
  },
});

export const json_schema_v7 = () => ({
    Component: Instance,
    props: {
        top_level: true,
        definition: schema7,
    }
})
