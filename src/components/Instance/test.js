import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/svelte";

import Instance from '.';

test("we grok boolean type", () => {
  const { getByText } = render(Instance, { definition: { type: 'boolean' } });

  expect(getByText("boolean")).toBeInTheDocument();
});
