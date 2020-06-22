# jsonschematic

jsonschematic is a [json schema][] in the same vein as 
[docson][].

## How to run

The project is still in early development, but to get a 'dev'
version of the sapper app running, do:

    $ npm install
    $ JSONSCHEMATIC_DIR=examples npm run dev

## Supported JSON Schema keywords

- [ ] $comment
- [ ] $id
- [ ] $ref
- [ ] $schema
- [ ] additionalItems
- [ ] additionalProperties
- [ ] allOf
- [ ] anyOf
- [ ] array
- [ ] boolean
- [ ] const
- [ ] contains
- [ ] containsEncoding
- [ ] contentMediaType
- [ ] default
- [ ] definitions
- [ ] dependencies
- [ ] else
- [ ] enum
- [ ] examples
- [ ] exclusiveMaximum
- [ ] exclusiveMinimum
- [ ] format
- [ ] if
- [ ] integer
- [ ] items
- [ ] maximum
- [ ] maxItems
- [ ] maxLength
- [ ] maxProperties
- [ ] minimum
- [ ] minItems
- [ ] minLength
- [ ] minProperties
- [ ] multipleOf
- [ ] not
- [ ] null
- [ ] number
- [ ] object
- [ ] oneOf
- [ ] pattern
- [ ] patternProperties
- [ ] properties
- [ ] propertyNames
- [ ] readOnly
- [ ] required
- [ ] string
- [ ] then
- [ ] title
- [ ] type
- [ ] uniqueItems
- [ ] writeOnly


## Authors

jsonschematic is developed under the auspice of 
[Infinity Interactive](https://www.iinteractive.com/).

© 2020 Infinity Interactive

[json schema]: https://json-schema.org
[docson]: https://github.com/lbovet/docson
