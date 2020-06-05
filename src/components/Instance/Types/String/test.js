import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/svelte";

import String from ".";

test("the String component says 'string'", () => {
  const { getByText } = render(String, { });

  expect(getByText("string")).toBeInTheDocument();
});

test( "minLength prop", () => {

  const { getByText } = render(String, { minLength: 3 });

  expect(getByText(">= 3")).toBeInTheDocument();

});
