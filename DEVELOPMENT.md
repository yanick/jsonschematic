# Dev notes

## Getting started

    $ git clone git@github.com:yanick/jsonschematic.git
    $ cd jsonschematic
    $ npm install

### Run the app in dev mode

    $ npm run dev

### Run the storybook

    $ npm run storybook

## Unit tests

We are using [jest][] and [@testing-library/svelte][], with the 
jest helper [jest-dom][].

To run the tests:

    npm run test

## Changelog and versioniong

The versioning of `jsonschematic` is taken care
of by `standard-version`. Commits are
encouraged to follow the patterns defined in
https://www.conventionalcommits.org/en/v1.0.0/

## Fonts

Main font: Sans PT

body base font size: (1rem) 16pt;
body line-height: 22pt; 

Scale: 1.125

[jest]: https://jestjs.io/
[@testing-library/svelte]: https://testing-library.com
[jest-dom]: https://github.com/testing-library/jest-dom
