import { withKnobs, text } from "@storybook/addon-knobs";
import String from "./index.svelte";

export default { title: "String",
    decorators: [withKnobs]};

export const basic = () => ({
  Component: String,
  props: {
      "title": text('title',"Open Contracting ID"),
      "description": text('description', "A globally unique identifier for this Open Contracting Process. Composed of a publisher prefix and an identifier for the contracting process. For more information see the [Open Contracting Identifier guidance](http://standard.open-contracting.org/1.1/en/schema/identifiers/)"),
  },
});
