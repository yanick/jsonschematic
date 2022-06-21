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
];
