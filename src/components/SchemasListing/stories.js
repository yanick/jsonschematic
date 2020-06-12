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

export const withDefinitions = () => ({
  Component: SchemasListing,
  props: {
    schemas: {
      foo: {
        id: 'foo'
      },
      bar: {
        id: 'bar',
        definitions: {
          Beyond: {id: 'Beyond'},
          All: {id: 'All'},
          Recognition: {id: 'Recognition'}
        }
      }
    },
  }
});
