const tap = require("../../tests/svelte_loader");
import { render, fireEvent } from "@testing-library/svelte";

const Comp = require("./RequiredBugTest.svelte");

tap.test( async (t) => {
    const { debug, getByText } = render(Comp);
    await fireEvent.click( getByText('click me' ));
    t.ok(getByText('quux'));
});
