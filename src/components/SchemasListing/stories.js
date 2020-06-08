import SchemasListing  from '.';

export default { title: "SchemasListing" };

export const basic = () => ({
  Component: SchemasListing,
  props: {
    schemas: {
      foo: {
        id: 'foo'
      },
      bar: {
        id: 'bar'
      }
    },
  }
});
