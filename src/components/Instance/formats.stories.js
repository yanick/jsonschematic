import { storiesOf } from "@storybook/svelte";

import Instance from ".";

const stories = storiesOf("Types/String/Format", module);

import formats from "./Types/String/formats";

const fstory = format => () => ({
  Component: Instance,
  props: {
    definition: { type: "string", format }
  }
});

Object.keys(formats).forEach(format => {
  stories.add(format, fstory(format));
});

stories.add("unknown", fstory("unknown"));
