# jsonschematic

jsonschematic is a [json schema][] in the same vein as
[docson][].

The interactive(!) demo page lives at [https://yanick.github.io/jsonschematic/](https://yanick.github.io/jsonschematic/).

## How to run

From a global install:

    $ npm install -g @infinity-interactive/jsonschematic
    $ jsonschematic --schema_dir path/to/schemas

From the repo:

    $ git clone https://github.com/yanick/jsonschematic.git
    $ cd jsonschematic
    $ npm install
    $ JSONSCHEMATIC_DIR=examples npm run dev

## Supported JSON Schema keywords

- [x] [\$comment](https://yanick.github.io/jsonschematic/#$comment)
- [x] [\$id](https://yanick.github.io/jsonschematic/#$id)
- [x] [\$ref](https://yanick.github.io/jsonschematic/#$ref)
- [x] [\$schema](https://yanick.github.io/jsonschematic/#$schema)

- [x] [title](https://yanick.github.io/jsonschematic/#title)

- [ ] [type](https://yanick.github.io/jsonschematic/#type)

  - [x] [integer](https://yanick.github.io/jsonschematic/#integer)

  - [x] [number](https://yanick.github.io/jsonschematic/#number)

    - [x] [minimum](https://yanick.github.io/jsonschematic/#minimum)
    - [x] [maximum](https://yanick.github.io/jsonschematic/#maximum)
    - [x] [exclusiveMaximum](https://yanick.github.io/jsonschematic/#exclusiveMaximum)
    - [x] [exclusiveMinimum](https://yanick.github.io/jsonschematic/#exclusiveMinimum)
    - [x] [multipleOf](https://yanick.github.io/jsonschematic/#multipleOf)

  - [x] [string](https://yanick.github.io/jsonschematic/#string)

    - [x] [minLength](https://yanick.github.io/jsonschematic/#minLength)
    - [x] [maxLength](https://yanick.github.io/jsonschematic/#maxLength)
    - [x] [format](https://yanick.github.io/jsonschematic/#format)
    - [x] [contentEncoding](https://yanick.github.io/jsonschematic/#contentEncoding)
    - [x] [contentMediaType](https://yanick.github.io/jsonschematic/#contentMediaType)

  - [x] [array](https://yanick.github.io/jsonschematic/#array)

    - [x] [minItems](https://yanick.github.io/jsonschematic/#minItems)
    - [x] [maxItems](https://yanick.github.io/jsonschematic/#maxItems)
    - [x] [minContains](https://yanick.github.io/jsonschematic/#minContains)
    - [x] [maxContains](https://yanick.github.io/jsonschematic/#maxContains)
    - [x] [uniqueItems](https://yanick.github.io/jsonschematic/#uniqueItems)
    - [x] [items](https://yanick.github.io/jsonschematic/#items)
      - [x] as a schema
      - [x] as a tuple
    - [x] [additionalItems](https://yanick.github.io/jsonschematic/#additionalItems)

  - [x] [boolean](https://yanick.github.io/jsonschematic/#boolean)

  - [x] [enum](https://yanick.github.io/jsonschematic/#enum)
  - [x] [const](https://yanick.github.io/jsonschematic/#const)

  - [x] [null](https://yanick.github.io/jsonschematic/#null)

  - [x] [object](https://yanick.github.io/jsonschematic/#object)

    - [x] [properties](https://yanick.github.io/jsonschematic/#properties)
    - [x] [required](https://yanick.github.io/jsonschematic/#required)
    - [x] [maxProperties](https://yanick.github.io/jsonschematic/#maxProperties)
    - [x] [minProperties](https://yanick.github.io/jsonschematic/#minProperties)
    - [x] [propertyNames](https://yanick.github.io/jsonschematic/#propertyNames)
    - [ ] [additionalProperties](https://yanick.github.io/jsonschematic/#additionalProperties)
      - [ ] as boolean
      - [ ] as object
    - [x] [patternProperties](https://yanick.github.io/jsonschematic/#patternProperties)

  - [ ] type as an array of types

- [x] [dependencies](https://yanick.github.io/jsonschematic/#dependencies)

  - [x] property dependencies
  - [x] schema dependencies

- [x] [if](https://yanick.github.io/jsonschematic/#if)

  - [x] [then](https://yanick.github.io/jsonschematic/#then)
  - [x] [else](https://yanick.github.io/jsonschematic/#else)

- [x] [allOf](https://yanick.github.io/jsonschematic/#allOf)
- [x] [anyOf](https://yanick.github.io/jsonschematic/#anyOf)
- [x] [oneOf](https://yanick.github.io/jsonschematic/#oneOf)
- [x] [not](https://yanick.github.io/jsonschematic/#not)

- [x] [readOnly](https://yanick.github.io/jsonschematic/#readOnly)
- [x] [writeOnly](https://yanick.github.io/jsonschematic/#writeOnly)

- [ ] [contains](https://yanick.github.io/jsonschematic/#contains)
- [x] [definitions](https://yanick.github.io/jsonschematic/#definitions)
- [x] [default](https://yanick.github.io/jsonschematic/#default)
- [ ] [examples](https://yanick.github.io/jsonschematic/#examples)
  - [x] scalar values
  - [ ] data structures [issue #66](https://github.com/yanick/jsonschematic/issues/66)
- [x] [pattern](https://yanick.github.io/jsonschematic/#pattern)
- [x] schema as a boolean

## Authors

jsonschematic is developed under the auspice of
[Infinity Interactive](https://www.iinteractive.com/).

© 2020 Infinity Interactive

[json schema]: https://json-schema.org
[docson]: https://github.com/lbovet/docson
