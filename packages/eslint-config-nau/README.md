# eslint-config-nau

[![npm version](https://badge.fury.io/js/eslint-config-nau.svg)](https://badge.fury.io/js/eslint-config-nau.svg)

This package provides Nau's base JS .eslintrc.js as an extensible shared config.

## Usage

We export below ESLint configuration for your usage.

### eslint-config-nau

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-nau@latest" peerDependencies
  ```

  Linux/OSX users can simply run
  ```sh
  (
    export PKG=eslint-config-nau;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-nau eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "nau"` to your .eslintrc.js


## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
