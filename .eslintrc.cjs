module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier', 'plugin:svelte/recommended'],
  plugins: [],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser'
    }
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off',
    'no-useless-escape': 'off'
  }
};
