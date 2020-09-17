# JavaScript code snippet library

A library with examples and exercises in JavaScript.

## First steps in JavaScript

- [MDN web docs - Introduction](https://developer.mozilla.org/de/docs/Web/JavaScript)

- [MDN web docs - Guide](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide)

## Technical docs

- [JavaScript Reference](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference)

## Documentation in JavaScript code

- [Documenting JavaScript with JSDoc](https://jsdoc.app/)

## Define jsconfig.json

The best practice, and least error prone route, is to use the include attribute with a single src folder instead of the exclude attribute.

jsconfig.json:
~~~
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6"
  },
  "include": ["src/**/*"]
}
~~~

## Use type checking

JavaScript type checking requires TypeScript 2.3.

### Use type check per file

Add `// @ts-check` to the top of a file.

~~~
// @ts-check
let itsAsEasyAs = 'abc';
itsAsEasyAs = 123; // Error: Type 'number' is not assignable to type 'string'
~~~

### Use a setting in Visual Studio Code to globally enable type checking

To enable type checking for all JavaScript files without changing any code just add `"javascript.implicitProjectConfig.checkJs": true` to your workspace or user settings. This enables type checking for any JavaScript file that is not part of a `jsconfig.json` or `tsconfig.json` project.

### Opt individual files out of file checking

Add `// @ts-nocheck` to the top of a file.

~~~
// @ts-nocheck
let easy = 'abc';
easy = 123; // no error
~~~

### Disable individual errors when using file checking

Add `// @ts-ignore` just over your variable assignment or over the place you want to ignore an type check error.

Example:
~~~
let easy = 'abc';
// @ts-ignore
easy = 123; // no error
~~~

### Using jsconfig or tsconfig with file checking

To enable type checking for JavaScript files that are part of a `jsconfig.json` or `tsconfig.json`, add `"checkJs": true` to the project's compiler options:

jsconfig.json:
~~~
{
  "compilerOptions": {
    "checkJs": true
  },
  "include": ["./*"]
}
~~~

tsconfig.json:
~~~
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  },
  "include": ["./*"]
}
~~~