export default [
    {
        type: 'object',
        propertyNames: {
            pattern: '^[A-Za-z_][A-Za-z0-9_]*$',
        },
        title: 'propertyNames',
    },
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
    { title: 'object examples', type: 'object', examples: [{ level: 3 }] },
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
