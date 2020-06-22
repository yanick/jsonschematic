import tap from "tap"; require("../../../tests/svelte_loader");

import { cleanup, render, fireEvent } from '@testing-library/svelte';

const Enum = require("./index.svelte");

tap.test("we get our list ", async (t) => {

  const { getByText } = render(Enum, { enumeration: ["hoist","the","jolly","roger"] });
  t.ok(getByText("enum")); 
  t.ok(getByText("hoist"));
  t.ok(getByText("roger"));
  cleanup();

});


tap.test('filters', async (t) => {

  const { queryByText, getByText, getByPlaceholderText, queryByPlaceholderText } = render(Enum, { enumeration: ["hoist","the","jolly","roger"] });

  t.ok(getByText("enum")); 
  t.ok(getByText("the"));

  const button = getByText("filter...");  
  // the filter text box hasn't been drawn
  t.notOk( queryByPlaceholderText("filtering regex")); 
  
  // click the filter button 
  await fireEvent.click(button);                

  // find the filter text box
  const filterBox = getByPlaceholderText("filtering regex"); 
  // it has no value yet
  t.equal(filterBox.value, '');                              

  // change doesn't cause the bind variables to change use input
  await fireEvent.input( filterBox, { target: { value: "hoist" }}); 
  // the filterbox has been updated by our input event
  t.equal(filterBox.value, 'hoist');                                

  // now let's check that ouput has been filtered
  // hoist is still there, the is gone
  t.ok(getByText("hoist"));
  t.notOk(queryByText("the")); 
  cleanup();

})


