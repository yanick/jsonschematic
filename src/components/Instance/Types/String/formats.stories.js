import { storiesOf } from "@storybook/svelte";

import String from ".";

const stories = storiesOf("Types/String/Format", module);

import formats from "./formats";

const fstory = (format) => () => ({
  Component: String,
  props: {
    definition: { format },
  },
});

Object.keys(formats).forEach((format) => {
  stories.add(format, fstory(format));
});

stories.add("unknown", fstory("unknown"));
