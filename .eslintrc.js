module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-curly-spacing": [2, { "when": "always" }],
    "react/prop-types": 0,
    "react/button-has-type": 0,
    "react/no-access-state-in-setstate": 0,
    "max-len": [2, { code: 120 }],
    "operator-linebreak": [2, "after"],
    "no-console": [2, { allow: ["debug", "info", "error", "warn"] }],
    "no-underscore-dangle": [2, {
      "allowAfterThis": true,
      "enforceInMethodNames": false,
    }],
    "linebreak-style": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/accessible-emoji": 0,
    "no-multi-assign": 0,
    "quote-props": 0,
  },
};
