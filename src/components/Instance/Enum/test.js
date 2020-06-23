const tap = require("../../../tests/svelte_loader");

import { render, fireEvent } from "@testing-library/svelte";

const Enum = require("./index.svelte");

tap.test("filters", async (t) => {
  const {
    queryByText,
    getByText,
    getByPlaceholderText,
    queryByPlaceholderText,
  } = render(Enum, { enumeration: ["hoist", "the", "jolly", "roger"] });

  t.ok(getByText("enum"));
  t.ok(getByText("hoist"));
  t.ok(getByText("the"));

  const button = getByText("filter...");

  t.notOk(
    queryByPlaceholderText("filtering regex"),
    "the filter text box hasn't been drawn"
  );

  // click the filter button
  await fireEvent.click(button);

  // find the filter text box
  const filterBox = getByPlaceholderText("filtering regex");

  t.equal(filterBox.value, "", "it has no value yet");

  // change doesn't cause the bind variables to change use input
  await fireEvent.input(filterBox, { target: { value: "hoist" } });
  // the filterbox has been updated by our input event
  t.equal(filterBox.value, "hoist");

  // now let's check that ouput has been filtered
  // hoist is still there, the is gone
  t.ok(getByText("hoist"));
  t.notOk(queryByText("the"));
});
