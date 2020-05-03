module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    es6: true,
    'jest/globals': true,
    node: true,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      { ignoreEnums: true, ignoreNumericLiteralTypes: true },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true, // https://github.com/airbnb/javascript#21.1
        singleQuote: true, // https://github.com/airbnb/javascript#6.1
        trailingComma: 'all', // https://github.com/airbnb/javascript#20.2
        printWidth: 100, // https://github.com/airbnb/javascript#19.13
        jsxBracketSameLine: false, // https://github.com/airbnb/javascript/tree/master/react#alignment
        jsxSingleQuote: false, // https://github.com/airbnb/javascript/tree/master/react#quotes
        tabWidth: 2, // https://github.com/airbnb/javascript#19.1
        useTabs: false, // https://github.com/airbnb/javascript#19.1
        quoteProps: 'as-needed', // https://github.com/airbnb/javascript#3.6
        bracketSpacing: true, // https://github.com/airbnb/javascript#19.12
        arrowParens: 'always', // https://github.com/airbnb/javascript#8.4
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
      },
    },
  ],
};
