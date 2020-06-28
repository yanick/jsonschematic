export default [
    {
        title: "number w/ minimum, maximum",
        keywords: [ 'number', 'minimum', 'maximum' ],
            type: "number",
            minimum: 3,
            maximum: 10,
    },
    {
        title: "number w/ exclusiveMinimum, exclusiveMaximum",
        keywords: [ 'number', 'exclusiveMaximum', 'exclusiveMinimum' ],
            type: "number",
            exclusiveMinimum: 3,
            exclusiveMaximum: 10,
    },
    {
        title: "number w/ multipleOf",
        keywords: [ 'number', 'multipleOf' ],
            type: "number",
            multipleOf: 3,
    },
    {
        title: "integer w/ default",
            type: "integer",
            default: 13,
    },
    {
        title: "string type w/ minLength",
        type: "string",
        minLength: 3,
    }
].map( entry => {
    if(!entry.keywords) entry.keywords = [];
    entry.keywords.push(...Object.keys(entry));
    entry.keywords.push(entry.type);
    return entry;
}
)
