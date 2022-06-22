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
    { title: 'writeOnly', writeOnly: true, type: 'string' },
    { title: 'readOnly', readOnly: true, type: 'string' },
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
];
