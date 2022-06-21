export default [
    {
        title: 'additionalItems set to false',
        type: 'array',
        items: [
            {
                type: 'number',
            },
            {
                type: 'string',
            },
            {
                type: 'string',
                enum: ['Street', 'Avenue', 'Boulevard'],
            },
            {
                type: 'string',
                enum: ['NW', 'NE', 'SW', 'SE'],
            },
        ],
        additionalItems: false,
    },
    {
        title: 'additionalItems set to true',
        type: 'array',
        items: [
            {
                type: 'number',
            },
            {
                type: 'string',
            },
            {
                type: 'string',
                enum: ['Street', 'Avenue', 'Boulevard'],
            },
            {
                type: 'string',
                enum: ['NW', 'NE', 'SW', 'SE'],
            },
        ],
        additionalItems: true,
    },
    {
        title: 'additionalItems set to schema',
        type: 'array',
        items: [
            {
                type: 'number',
            },
            {
                type: 'string',
            },
            {
                type: 'string',
                enum: ['Street', 'Avenue', 'Boulevard'],
            },
            {
                type: 'string',
                enum: ['NW', 'NE', 'SW', 'SE'],
            },
        ],
        additionalItems: {
            type: 'number',
        },
    },
    {
        title: 'additionalItems with object items',
        type: 'array',
        items: {
            type: 'number',
        },
        additionalItems: {
            type: 'number',
        },
    },
    {
        title: 'with a $comment',
        description: 'this is the description',
        $comment: 'and this is the comment',
    },
    { title: "'true' as the schema", type: 'array', items: true },
    { title: "'false' as the schema", type: 'array', items: false },
    {
        type: 'object',
        properties: {
            builtin: { type: 'number' },
        },
        patternProperties: {
            '^S_': { type: 'string' },
            '^I_': { type: 'integer' },
        },
        additionalProperties: { type: 'string' },
        title: 'patternProperties',
    },
    {
        type: 'array',
        items: {
            type: 'number',
        },
        title: 'items as a schema',
    },
    {
        type: 'array',
        items: [{ type: 'number' }, { type: 'string' }],
        title: 'items as a tuple',
    },
    {
        type: 'object',
        propertyNames: {
            pattern: '^[A-Za-z_][A-Za-z0-9_]*$',
        },
        title: 'propertyNames',
    },
    {
        title: 'additionalProperties as `false`',
        type: 'object',
        properties: {
            foo: { type: 'string' },
        },
        additionalProperties: false,
    },
    {
        title: 'additionalProperties as object',
        type: 'object',
        properties: {
            foo: { type: 'string' },
        },
        additionalProperties: {
            type: 'string',
        },
    },
    { title: 'writeOnly', writeOnly: true, type: 'string' },
    { title: 'readOnly', readOnly: true, type: 'string' },
    {
        title: 'not',
        type: 'string',
        not: { maxLength: 5 },
    },
    {
        title: 'anyOf',
        anyOf: [
            { type: 'string', maxLength: 5 },
            { type: 'number', minimum: 0 },
        ],
    },
    {
        title: 'oneOf',
        oneOf: [
            { type: 'string', maxLength: 5 },
            { type: 'number', minimum: 0 },
        ],
    },
    {
        title: 'allOf',
        allOf: [
            { type: 'string', maxLength: 5 },
            { type: 'number', minimum: 0 },
        ],
    },
    {
        title: 'if-then-else',
        type: 'object',
        properties: {
            street_address: {
                type: 'string',
            },
            country: {
                enum: ['United States of America', 'Canada'],
            },
        },
        if: {
            properties: { country: { const: 'United States of America' } },
        },
        then: {
            properties: { postal_code: { pattern: '[0-9]{5}(-[0-9]{4})?' } },
        },
        else: {
            properties: {
                postal_code: { pattern: '[A-Z][0-9][A-Z] [0-9][A-Z][0-9]' },
            },
        },
    },
    {
        type: 'object',

        properties: {
            name: { type: 'string' },
            credit_card: { type: 'number' },
        },

        required: ['name'],

        dependencies: {
            credit_card: {
                properties: {
                    billing_address: { type: 'string' },
                },
                required: ['billing_address'],
            },
        },
    },
    {
        title: 'property dependencies',
        type: 'object',

        properties: {
            name: { type: 'string' },
            credit_card: { type: 'number' },
            billing_address: { type: 'string' },
        },

        required: ['name'],

        dependencies: {
            credit_card: ['billing_address'],
        },
    },
    {
        title: 'null type',
        type: 'null',
    },
    {
        title: 'string w/ enum',
        type: 'string',
        enum: ['potato', 'cauliflower', 'beet'],
    },
    {
        title: 'string w/ content type and encoding',
        type: 'string',
        contentEncoding: 'base64',
        contentMediaType: 'image/png',
    },
    {
        title: 'object with properties, required, minProperties, maxProperties',
        type: 'object',
        properties: {
            foo: { type: 'string' },
            bar: { type: 'number' },
            baz: { type: 'boolean' },
        },
        required: ['foo'],
        minProperties: 2,
        maxProperties: 3,
    },
    {
        title: 'string with a date-time format',
        type: 'string',
        format: 'date-time',
        description:
            'the format comes with a tooltip too! Hover over the format to see it.',
    },
    { title: 'examples', type: 'number', examples: [1, 2, 3] },
    { title: 'object examples', type: 'object', examples: [{ level: 3 }] },
    {
        title: 'array type',
        type: 'array',
        maxItems: 10,
        minItems: 3,
        maxContains: 2,
        minContains: 1,
        uniqueItems: true,
    },
    { title: 'boolean type', type: 'boolean' },
    {
        title: 'number w/ minimum, maximum',
        keywords: ['number', 'minimum', 'maximum'],
        type: 'number',
        minimum: 3,
        maximum: 10,
    },
    {
        title: 'number w/ exclusiveMinimum, exclusiveMaximum',
        keywords: ['number', 'exclusiveMaximum', 'exclusiveMinimum'],
        type: 'number',
        exclusiveMinimum: 3,
        exclusiveMaximum: 10,
    },
    {
        title: 'integer w/ exclusiveMinimum, exclusiveMaximum',
        type: 'integer',
        exclusiveMinimum: 3,
        exclusiveMaximum: 10,
    },
    {
        title: 'number w/ multipleOf',
        keywords: ['number', 'multipleOf'],
        type: 'number',
        multipleOf: 3,
    },
    {
        title: 'integer w/ default',
        type: 'integer',
        default: 13,
    },
    {
        title: 'string type w/ minLength, maxLength',
        type: 'string',
        minLength: 3,
        maxLength: 13,
    },
    {
        title: 'a simple ref',
        $ref: '#/somewhere/else',
    },
    {
        type: 'object',
        $id: 'http://yanick.github.io/jsonschematic',
        $schema: 'http://json-schema.org/draft-07/schema#',
        title: '$id and regular $schema',
        description:
            'if the $schema is one of the official json schema urls, the display will simply be v*number*',
    },
].map((entry) => {
    if (!entry.keywords) entry.keywords = [];
    entry.keywords.push(...Object.keys(entry));
    entry.keywords.push(entry.type);
    return entry;
});
