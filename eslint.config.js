import tsParser from '@typescript-eslint/parser';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';

export default [
  {
    root: true,
    env: {
      browser: true,
      node: true,
      es2023: true,
    },
    globals: {
      react: 'readonly',
      jest: 'readonly',
    },
    parser: tsParser,
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      ecmaFeatures: {
        jsx: true,
      },
      project: 'tsconfig.json',
      tsconfigRootDir: './',
      settings: {
        react: {
          version: 'detect',
        },
        next: {
          version: 'detect',
        },
        node: {
          version: '22',
        },
        'import/extensions': ['.ts', '.tsx'],
      },
    },

    extends: [
      // 'plugin:react-hooks/recommended',
      // 'plugin:next/next',
      // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      // 'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:@stylistic/ts/recommended-extends',
      'plugin:@stylistic/jsx',
      'prettier',
    ],
    plugins: {
      '@stylistic/migrate': 1,
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx,
      import: 0,
      prettier: 1,
    },
    rules: {
      'prettier/prettier': 'warn',
      '@stylistic/ts/arrow-body-style': 'off',
      '@stylistic/ts/ban-types': 'off',
      '@stylistic/ts/no-unsafe-assignment': 'warn',
      '@stylistic/ts/prefer-arrow-callback': 'off',
      '@stylistic/ts/explicit-module-boundary-types': 'off',
      '@stylistic/ts/no-non-null-assertion': 'off',
      '@stylistic/ts/no-inferrable-types': 'off',
      '@stylistic/ts/no-use-before-define': 'off',
      '@stylistic/ts/no-unused-vars': 'warn',
      '@stylistic/ts/restrict-template-expressions': 'off',
      '@stylistic/ts/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      '@stylistic/ts/brace-style': [
        'warn',
        {},
      ],
      '@stylistic/jsx/react-in-jsx-scope': 'off',
      '@stylistic/jsx/display-name': 'off',
      '@stylistic/jsx/no-deprecated': 'error',
      '@stylistic/jsx/jsx-sort-props': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 0,
      '@stylistic/jsx/no-unsafe': [
        'error',
        {
          checkAliases: true,
        },
      ],
      '@next/next/no-img-element': 'off',
      'import/no-unresolved': [
        'warn',
        {
          commonjs: true,
          amd: true,
        },
      ],
      'import/default': 'off',
      'import/export': 'warn',
      'import/namespace': 'off',
      'import/no-anonymous-default-export': 'off',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-else-return': 'error',
      'brace-style': ['error', 'stroustrup'],
      'prefer-const': 'warn',
      'no-use-before-define': 'off',
      'camelcase': 'warn',
      '@stylistic/ts/semi': 'warn',
      'quotes': ['warn', 'single'],
    },
    overrides: [
      {
        files: ['*.graphql', '.gql'],
        parser: '@graphql-eslint/eslint-plugin',
        plugins: ['@graphql-eslint', 'plugin:prettier'],
        extends: ['prettier'],
        rules: {
          'prettier/prettier': 'warn',
          '@graphql-eslint/known-type-names': 'error',
        },
      },
    ],
  },
];
