const prettierrc = require('.prettierrc.json');

module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    project: 'bleek-dot-dev/tsconfig.json',
    tsconfigRootDir: '.',
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        version: 'detect',
      },
      node: {
        version: '18',
      },
      'import/extensions': ['.ts', '.tsx'],
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/@typescript-eslint',
    'prettier',
  ],
  // plugins bring in special rules, prettierrc rules you set
  plugins: ['@typescript-eslint', 'react', 'import', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 0,
    'react/no-deprecated': 'error',
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true,
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'prettier/prettier': ['warn', prettierrc],
    '@next/next/no-img-element': 'off',
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'import/default': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/export': 'warn',
    'import/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/arrow-body-style': 'off',
    '@typescript-eslint/prefer-arrow-callback': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/brace-style': ['error', 'stroustrup'],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-else-return': 'error',
    'brace-style': ['error', 'stroustrup'],
    'prefer-const': 'warn',
    'no-use-before-define': 'off',
    camelcase: 'warn',
    quotes: ['warn', 'single'],
  },
};
