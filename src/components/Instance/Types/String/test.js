import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/svelte";

import String from ".";

test("the String component says 'string'", () => {
  const { getByText } = render(String, {});

  expect(getByText("string")).toBeInTheDocument();
});

test("default M-lengths", () => {
  const { queryByText } = render(String, {});

  expect(queryByText("≥ 0")).toBeNull();
  expect(queryByText("MaxLength", { exact: false })).toBeNull();
});

test("minLength prop", () => {
  const { getByText } = render(String, {
    props: { definition: { minLength: 3, maxLength: 100, pattern: "*" } },
  });

  expect(getByText("≥ 3")).toBeInTheDocument();

  //renders &lt; and &gt; but not &infin; (it presents nothing in the infin case so
  //not the default
  expect(getByText("≤ 100")).toBeInTheDocument();
  expect(getByText("value matches pattern *")).toBeInTheDocument();
});
