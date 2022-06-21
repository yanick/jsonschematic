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
];
