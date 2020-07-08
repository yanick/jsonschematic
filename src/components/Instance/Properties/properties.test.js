const tap = require("../../../tests/svelte_loader");

const Instance = require("./index.svelte");

/*
So I decided to use this examples.... cuz it has the link or whatever
and I realized I couldn't render it..for some reason...

me being me I had to figure out why and the error I was getting about rejected promise etc was a little to radical from me to understand
so I cut it into pieces and figure out it was the tags.

and I looked at the tags and then made my own stupid version and I have an error


*/

import example from "../../../../examples/example.json";

import { render } from "@testing-library/svelte";


tap.test("required", async (t) => {

/*
  let name = example.definitions.Product.properties.name;
  let price = example.definitions.Product.properties.price;
  let id = example.definitions.Product.properties.id;
  let prop = example.definitions.Product.properties.prop;
  let tags = example.definitions.Product.properties.tags;
  let dimensions = example.definitions.Product.properties.dimensions;
  let properties = example.definitions.Product.properties
  let required = example.definitions.Product.required;
*/

  //let definitionJson = {properties, required };
  //let definitionJson = {properties: pJson };



/*
  let definitionJson = {
     properties: {
       name, price, id, prop, dimensions, tags
     },
     required: ['name','price','id']
  };
*/

// is seems when we pass a array type property with a type string into properties (and I think into instance too)
// we go boom.... I'm not sure why this is working from the front end (cuz it seems to)

  let definitionJson = {
     properties: { 
        zmog: {type:"array", items:{type:"string"}
     }}};
  


  console.log (definitionJson);

  let { getByText, debug, container } = render( Instance, definitionJson );

/*
  console.log ('--------------------------dj');
  console.log(container.querySelector(".required"));
  console.log(container.querySelectorAll(".required").length);
  console.log(container.querySelectorAll(".required").textContent);
*/

  console.log ('----------------------------dj');
  t.ok( getByText("zmog"));
  //t.ok( getByText("price"));

/*
  t.is(
    container.querySelectorAll(".required").length,
    3,
    "found 3 required elements in the properties list"
  );
*/


});



/*
export default { title: "Properties", decorators: [withKnobs] };

export const refProperties = () => ({
  Component: Properties,
  props: {
    properties: object("properties", example.definitions.Product.properties),
  },
});
export const refProp = () => ({
  Component: Properties,
  props: {
  },
});
*/
