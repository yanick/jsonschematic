# jsonschematic

jsonschematic is a [json schema][] in the same vein as
[docson][].

## How to run

The project is still in early development, but to get a 'dev'
version of the sapper app running, do:

    $ npm install
    $ JSONSCHEMATIC_DIR=examples npm run dev

## Supported JSON Schema keywords

- [ ] [$comment](https://yanick.github.io/jsonschematic/#$comment)
- [ ] [$id](https://yanick.github.io/jsonschematic/#$id)
- [ ] [$ref](https://yanick.github.io/jsonschematic/#$ref)
- [ ] [$schema](https://yanick.github.io/jsonschematic/#$schema)

- [x] [title](https://yanick.github.io/jsonschematic/#title)

- [ ] [type](https://yanick.github.io/jsonschematic/#type)
    - [x] [number](https://yanick.github.io/jsonschematic/#number) 
        - [ ] [minimum](https://yanick.github.io/jsonschematic/#minimum)
        - [ ] [maximum](https://yanick.github.io/jsonschematic/#maximum)
    - [x] [string](https://yanick.github.io/jsonschematic/#string)
        - [x] [minLength](https://yanick.github.io/jsonschematic/#minLength)

- [ ] [additionalItems](https://yanick.github.io/jsonschematic/#additionalItems)
- [ ] [additionalProperties](https://yanick.github.io/jsonschematic/#additionalProperties)
- [ ] [allOf](https://yanick.github.io/jsonschematic/#allOf)
- [ ] [anyOf](https://yanick.github.io/jsonschematic/#anyOf)
- [ ] [array](https://yanick.github.io/jsonschematic/#array)
- [ ] [boolean](https://yanick.github.io/jsonschematic/#boolean)
- [ ] [const](https://yanick.github.io/jsonschematic/#const)
- [ ] [contains](https://yanick.github.io/jsonschematic/#contains)
- [ ] [containsEncoding](https://yanick.github.io/jsonschematic/#containsEncoding)
- [ ] [contentMediaType](https://yanick.github.io/jsonschematic/#contentMediaType)
- [x] [default](https://yanick.github.io/jsonschematic/#default)
- [ ] [definitions](https://yanick.github.io/jsonschematic/#definitions)
- [ ] [dependencies](https://yanick.github.io/jsonschematic/#dependencies)
- [ ] [enum](https://yanick.github.io/jsonschematic/#enum)
- [ ] [examples](https://yanick.github.io/jsonschematic/#examples)
- [ ] [exclusiveMaximum](https://yanick.github.io/jsonschematic/#exclusiveMaximum)
- [ ] [exclusiveMinimum](https://yanick.github.io/jsonschematic/#exclusiveMinimum)
- [ ] [format](https://yanick.github.io/jsonschematic/#format)
- [ ] [integer](https://yanick.github.io/jsonschematic/#integer)
- [ ] [items](https://yanick.github.io/jsonschematic/#items)
- [ ] [maximum](https://yanick.github.io/jsonschematic/#maximum)
- [ ] [maxItems](https://yanick.github.io/jsonschematic/#maxItems)
- [ ] [maxLength](https://yanick.github.io/jsonschematic/#maxLength)
- [ ] [maxProperties](https://yanick.github.io/jsonschematic/#maxProperties)
- [ ] [minItems](https://yanick.github.io/jsonschematic/#minItems)
- [ ] [minProperties](https://yanick.github.io/jsonschematic/#minProperties)
- [ ] [multipleOf](https://yanick.github.io/jsonschematic/#multipleOf)
- [ ] [not](https://yanick.github.io/jsonschematic/#not)
- [ ] [null](https://yanick.github.io/jsonschematic/#null)
- [ ] [number](https://yanick.github.io/jsonschematic/#number)
- [ ] [object](https://yanick.github.io/jsonschematic/#object)
- [ ] [oneOf](https://yanick.github.io/jsonschematic/#oneOf)
- [ ] [pattern](https://yanick.github.io/jsonschematic/#pattern)
- [ ] [patternProperties](https://yanick.github.io/jsonschematic/#patternProperties)
- [ ] [properties](https://yanick.github.io/jsonschematic/#properties)
- [ ] [propertyNames](https://yanick.github.io/jsonschematic/#propertyNames)
- [ ] [readOnly](https://yanick.github.io/jsonschematic/#readOnly)
- [ ] [required](https://yanick.github.io/jsonschematic/#required)
- [ ] [uniqueItems](https://yanick.github.io/jsonschematic/#uniqueItems)
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
