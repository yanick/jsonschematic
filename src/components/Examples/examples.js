export default [
    {
        title: "number w/ minimum, maximum",
        keywords: [ 'number', 'minimum', 'maximum' ],
        def: {
            type: "number",
            minimum: 3,
            maximum: 10,
        }
    },
    {
        title: "number w/ exclusiveMinimum, exclusiveMaximum",
        keywords: [ 'number', 'exclusiveMaximum', 'exclusiveMinimum' ],
        def: {
            type: "number",
            exclusiveMinimum: 3,
            exclusiveMaximum: 10,
        }
    },
    {
        title: "number w/ multipleOf",
        keywords: [ 'number', 'multipleOf' ],
        def: {
            type: "number",
            multipleOf: 3,
        }
    },
]
