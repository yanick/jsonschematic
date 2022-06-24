export default [
    {
        title: 'string w/ const',
        type: 'string',
        const: 'potato',
    },
    {
        title: 'string w/ enum',
        type: 'string',
        enum: ['potato', 'cauliflower', 'beet'],
    },
    {
        title: 'string type w/ minLength, maxLength',
        type: 'string',
        minLength: 3,
        maxLength: 13,
    },
    {
        title: 'string w/ content type and encoding',
        type: 'string',
        contentEncoding: 'base64',
        contentMediaType: 'image/png',
    },
    {
        title: 'string with a date-time format',
        type: 'string',
        format: 'date-time',
        description:
            'the format comes with a tooltip too! Hover over the format to see it.',
    },
    { title: 'writeOnly', writeOnly: true, type: 'string' },
    { title: 'readOnly', readOnly: true, type: 'string' },
    { title: 'boolean type', type: 'boolean' },
    { title: 'examples', type: 'number', examples: [1, 2, 3] },
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
        title: 'integer w/ default',
        type: 'integer',
        default: 13,
    },
    {
        title: 'number w/ multipleOf',
        keywords: ['number', 'multipleOf'],
        type: 'number',
        multipleOf: 3,
    },
    {
        title: 'null type',
        type: 'null',
    },
    { title: "'true' as the schema", type: 'array', items: true },
    { title: "'false' as the schema", type: 'array', items: false },
    {
        type: 'array',
        items: {
            type: 'number',
            title: 'the item',
        },
        title: 'items as a schema',
    },
    {
        type: 'array',
        items: [{ type: 'number' }, { type: 'string' }],
        title: 'items as a tuple',
    },
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
        title: 'array type',
        type: 'array',
        maxItems: 10,
        minItems: 3,
        maxContains: 2,
        minContains: 1,
        uniqueItems: true,
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
];
