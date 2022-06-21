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
];
