# eslint-config-nau-react

[![npm version](https://badge.fury.io/js/eslint-config-nau-react.svg)](http://badge.fury.io/js/eslint-config-nau-react)

This package provides Nau convention .eslintrc as an extensible shared config, for use with React project.

For non-React, basic eslint config, use `[eslint-config-nau](https://npmjs.com/eslint-config-nau)`

## Usage

We export two ESLint configurations for your usage.

### eslint-config-nau-react

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and optionally `eslint-plugin-jsx-a11y`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-nau-react@latest" peerDependencies
  ```

  Linux/OSX users can simply run

  ```sh
  (
    export PKG=eslint-config-nau-react;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-nau-react eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "nau-react"` to your .eslintrc.js

### eslint-config-nau-react/base

This entry point is for convenient only. See [eslint-config-nau](https://npmjs.com/eslint-config-nau).

See [Nau's Javascript styleguide](https://github.com/naustudio/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
