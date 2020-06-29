# jsonschematic

jsonschematic is a [json schema][] in the same vein as
[docson][].

## How to run

The project is still in early development, but to get a 'dev'
version of the sapper app running, do:

    $ npm install
    $ JSONSCHEMATIC_DIR=examples npm run dev

## Supported JSON Schema keywords

- [ ] [\$comment](https://yanick.github.io/jsonschematic/#$comment)
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
    - [ ] [items](https://yanick.github.io/jsonschematic/#items)
  - [x] [boolean](https://yanick.github.io/jsonschematic/#boolean)
  - [x] [enum](https://yanick.github.io/jsonschematic/#enum)
  - [x] [const](https://yanick.github.io/jsonschematic/#const)
  - [x] [object](https://yanick.github.io/jsonschematic/#object)
    - [x] [properties](https://yanick.github.io/jsonschematic/#properties)
    - [x] [required](https://yanick.github.io/jsonschematic/#required)
    - [x] [maxProperties](https://yanick.github.io/jsonschematic/#maxProperties)
    - [x] [minProperties](https://yanick.github.io/jsonschematic/#minProperties)
  - [ ] type as an array of types

- [ ] [additionalItems](https://yanick.github.io/jsonschematic/#additionalItems)
- [ ] [additionalProperties](https://yanick.github.io/jsonschematic/#additionalProperties)
- [ ] [allOf](https://yanick.github.io/jsonschematic/#allOf)
- [ ] [anyOf](https://yanick.github.io/jsonschematic/#anyOf)
- [ ] [contains](https://yanick.github.io/jsonschematic/#contains)
- [x] [definitions](https://yanick.github.io/jsonschematic/#definitions)
- [x] [default](https://yanick.github.io/jsonschematic/#default)
- [ ] [examples](https://yanick.github.io/jsonschematic/#examples)
  - [x] scalar values
  - [ ] data structures [issue #66](https://github.com/yanick/jsonschematic/issues/66)
- [ ] [dependencies](https://yanick.github.io/jsonschematic/#dependencies)
- [ ] [not](https://yanick.github.io/jsonschematic/#not)
- [ ] [null](https://yanick.github.io/jsonschematic/#null)
- [ ] [oneOf](https://yanick.github.io/jsonschematic/#oneOf)
- [ ] [pattern](https://yanick.github.io/jsonschematic/#pattern)
- [ ] [patternProperties](https://yanick.github.io/jsonschematic/#patternProperties)
- [ ] [propertyNames](https://yanick.github.io/jsonschematic/#propertyNames)
- [ ] [readOnly](https://yanick.github.io/jsonschematic/#readOnly)
- [ ] [writeOnly](https://yanick.github.io/jsonschematic/#writeOnly)
- [ ] [if](https://yanick.github.io/jsonschematic/#if)
- [ ] [then](https://yanick.github.io/jsonschematic/#then)
- [ ] [else](https://yanick.github.io/jsonschematic/#else)

## Authors

jsonschematic is developed under the auspice of
[Infinity Interactive](https://www.iinteractive.com/).

© 2020 Infinity Interactive

[json schema]: https://json-schema.org
[docson]: https://github.com/lbovet/docson
