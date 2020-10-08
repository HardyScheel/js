[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Learn JavaScript

A library with examples and exercises in JavaScript. There is many documentation and implementation that you can explore to learn, and also to use for yourself.

## Things I use

* JavaScript ES6 / ES2015
* [JavaScript Standard Style](https://standardjs.com/)
* [Visual Studio Code](https://code.visualstudio.com)
* Node.js 12 & npm

### Table of content
- [First steps in JavaScript](#first-steps-in-javascript)
- [Technical docs](#technical-docs)
- [JSDoc - Documentation in JavaScript code](#jsdoc---documentation-in-javascript-code)
- [Define jsconfig.json](#define-jsconfig.json)
- [Use type checking](#use-type-checking)
  - [Use type check per file](#use-type-check-per-file)
  - [Use a setting in Visual Studio Code to globally enable type checking](#use-a-setting-in-visual-studio-code-to-globally-enable-type-checking)
  - [Opt individual files out of file checking](#opt-individual-files-out-of-file-checking)
  - [Disable individual errors when using file checking](#disable-individual-errors-when-using-file-checking)
  - [Use jsconfig or tsconfig with file checking](#use-jsconfig-or-tsconfig-with-file-checking)
- [Style Guide](#style-guide)
  - [JavaScript Standard Style](#javascript-standard-style)
  - [ESLint](#eslint)
  - [Further reading](#further-reading)
---

## First steps in JavaScript

- [MDN web docs - Introduction](https://developer.mozilla.org/de/docs/Web/JavaScript)

- [MDN web docs - Guide](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide)

- [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

## Technical docs

- [JavaScript Reference](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference)

## JSDoc - Documentation in JavaScript code

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
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/node_modules/*"]
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

### Use jsconfig or tsconfig with file checking

To enable type checking for JavaScript files that are part of a `jsconfig.json` or `tsconfig.json`, add `"checkJs": true` to the project's compiler options:

jsconfig.json:
~~~
{
  "compilerOptions": {
    "checkJs": true
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
~~~

tsconfig.json:
~~~
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  },
  "exclude": ["node_modules", "**/node_modules/*", "**/*.spec.ts"]
}
~~~

## Style Guide
- [JavaScript Standard Style](https://standardjs.com)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [AirBnB's JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

### JavaScript *Standard* Style

**What is the difference between *ESLint* and *Standard*?**

 *Standard* is a CLI that you can run directly. It has more than 200 preconfigured *ESLint* rules that are bundled in a single command.

 **How to use *Standard*?**

Install globally to have the CLI:
```shell
npm install standard --global
```

 Add *Standard* to your project:
 ```shell
 npm install standard --save-dev
 ```

 Start *Standard* globally or project wise installed:
 ```shell
 standard
 npx standard
 ```

To fix a folder or file (globally or project wise installed):
```shell
standard --fix
npx standard --fix
standard yourfile.js --fix
npx standard yourfile.js --fix
```

### ESLint

 **How to use *ESLint*?**

 Add *ESLint* to your project:
 ```shell
 npm install eslint --save-dev
 ```

 Set up a configuration file:
 ```shell
 npx eslint --init
 ```
`--init` assumes you have a *package.json* file already. If you don't, make sure to run `npm init`.

 Run *ESLint* on your folder or file:
 ```shell
 npx eslint
 npx eslint yourfile.js
 ```

**Configure *ESLint***
* [https://eslint.org/docs/user-guide/getting-started](https://eslint.org/docs/user-guide/getting-started)
* [https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring)


### Further reading
- [https://medium.com/@oleg.agapov/7-recipes-of-much-readable-code-7e8fd995eb4a](https://medium.com/@oleg.agapov/7-recipes-of-much-readable-code-7e8fd995eb4a)
- [Most popular Linters on GitHub](https://github.com/collections/clean-code-linters)

MIT License

Copyright (c) 2020 Hardy Scheel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
