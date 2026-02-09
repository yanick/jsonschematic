import slug from 'slug';
import u from '@yanick/updeep';

const examples = [
  { title: 'examples', type: 'string', examples: ['potato', 'tomato'] },
  {
    title: 'string w/ enum',
    type: 'string',
    enum: ['potato', 'cauliflower', 'beet']
  },
  {
    title: 'with a $comment',
    description: 'this is the description',
    $comment: 'and this is the comment'
  },
  {
    type: 'object',
    propertyNames: {
      pattern: '^[A-Za-z_][A-Za-z0-9_]*$'
    },
    title: 'propertyNames'
  },
  {
    title: 'not',
    type: 'string',
    not: { maxLength: 5 }
  },
  {
    title: 'anyOf',
    anyOf: [
      { type: 'string', maxLength: 5 },
      { type: 'number', minimum: 0 }
    ]
  },
  {
    title: 'oneOf',
    oneOf: [
      { type: 'string', maxLength: 5 },
      { type: 'number', minimum: 0 }
    ]
  },
  {
    title: 'allOf',
    allOf: [
      { type: 'string', maxLength: 5 },
      { type: 'number', minimum: 0 }
    ]
  },
  {
    title: 'if-then-else',
    type: 'object',
    properties: {
      street_address: {
        type: 'string'
      },
      country: {
        enum: ['United States of America', 'Canada']
      }
    },
    if: {
      properties: { country: { const: 'United States of America' } }
    },
    then: {
      properties: { postal_code: { pattern: '[0-9]{5}(-[0-9]{4})?' } }
    },
    else: {
      properties: {
        postal_code: { pattern: '[A-Z][0-9][A-Z] [0-9][A-Z][0-9]' }
      }
    }
  },
  {
    type: 'object',

    properties: {
      name: { type: 'string' },
      credit_card: { type: 'number' }
    },

    required: ['name'],

    dependencies: {
      credit_card: {
        properties: {
          billing_address: { type: 'string' }
        },
        required: ['billing_address']
      }
    }
  },
  {
    title: 'property dependencies',
    type: 'object',

    properties: {
      name: { type: 'string' },
      credit_card: { type: 'number' },
      billing_address: { type: 'string' }
    },

    required: ['name'],

    dependencies: {
      credit_card: ['billing_address']
    }
  },
  {
    title: 'a simple ref',
    $ref: '#/somewhere/else'
  },
  {
    type: 'object',
    $id: 'http://yanick.github.io/jsonschematic',
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: '$id and regular $schema',
    description:
      'if the $schema is one of the official json schema urls, the display will simply be v*number*'
  }
].map((eg) => ({ ...eg, $anchor: slug(eg.title || '') }));

export const scrubExample = u({ _id: u.skip });

export default examples;

export const examplesByKeyword = {};

for (const eg of examples) {
  for (const key in eg) {
    if (!examplesByKeyword[key]) examplesByKeyword[key] = [];
    examplesByKeyword[key].push(eg);
  }
}
