import Component from "./index.svelte";

export default {
  title: "Types/Object"
};

export const required = () => ({
  Component,
  props: {
    definition: {
      type: "object",
      properties: {
        bar: { type: "number" },
        foo: { type: "number" }
      },
      required: ["foo"]
    }
  }
});
