import { storiesOf } from "@storybook/svelte";

import Instance from "../Instance/index.svelte";

import examples from "./examples.js";
import fp from "lodash/fp";

const keywords = fp.uniq(fp.map("keywords", examples).flat());
keywords.sort();

keywords.forEach((keyword) => {
  const title = `keywords/${keyword}`;
  const stories = storiesOf(title);

  examples
    .filter(({ keywords }) => keywords.includes(keyword))
    .forEach((ex) => {
      stories.add(ex.title || "MISSING TITLE", () => ({
        Component: Instance,
        props: { definition: ex },
      }));
    });
});
