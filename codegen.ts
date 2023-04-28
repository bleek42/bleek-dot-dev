import type { CodegenConfig } from '@graphql-codegen/cli';

import * as path from 'path';
import * as dotenv from 'dotenv';

import {
  GraphQLJSON,
  GraphQLURL,
  GraphQLLocale,
  GraphQLDate,
  GraphQLDateTime,
} from 'graphql-scalars';

dotenv.config({ path: path.join(process.cwd(), '.env.local'), encoding: 'UTF-8' });

// console.table({
//   NODE_ENV: process.env.NODE_ENV,
//   PORT: process.env.PORT,
//   HYGRAPH_READONLY_API_URL: process.env.HYGRAPH_READONLY_API_URL,
//   HYGRAPH_READONLY_API_KEY: process.env.HYGRAPH_READONLY_API_KEY,
// });

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  ignoreNoDocuments: true,
  documents: [
    'src/utils/gql-queries.ts',
    'src/pages/**/*.tsx',
    'src/components/**/*.tsx',
    'src/types/graphql/**/*.{gql,graphql}',
    '!src/types/graphql/**/*.ts',
  ],

  schema: [
    {
      [`${process.env.HYGRAPH_READONLY_API_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
        },
      },
    },
  ],

  generates: {
    // './src/types/graphql/hygraph.types.ts': {
    //   plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    //   preset: 'import-types',
    //   presetConfig: {
    //     typesPath: 'hygraph.types.ts',
    //   },
    //   config: {},
    // },

    './src/types/graphql/': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      preset: 'client-preset',
      presetConfig: {
        persistedDocuments: true,
        fragmentMasking: { unmaskFunctionName: 'getFragment' },
      },
      config: {
        declarationKind: {
          type: 'interface',
          input: 'interface',
        },
        gqlImport: 'graphql-request#gql',
        documentMode: 'documentNodeImportFragments',
        documentNodeImport: '@graphql-typed-document-node/core',
        exposeDocument: true,
        scalars: [
          {
            scalar: 'JSON',
            type: 'GraphQLJSONObject',
            import: 'graphql-scalars/esm/scalars#GraphQLJSONObject',
          },
          {
            scalar: 'Date',
            type: 'GraphQLDate',
            import: 'graphql-scalars/esm/scalars#GraphQLDate',
          },
          {
            scalar: 'DateTime',
            type: 'GraphQLDateTime',
            import: 'graphql-scalars/esm/scalars#GraphQLDateTime',
          },
          {
            scalar: 'URL',
            type: 'GraphQLURL',
            import: 'graphql-scalars/esm/scalars#GraphQLURL',
          },
          {
            scalar: 'Locale',
            type: 'GraphQLLocale',
            import: 'graphql-scalars/esm/scalars#GraGraphQLLocalephQLLocale',
          },
        ],
        strictScalars: false,
        enumsAsTypes: true,
        futureProofUnions: true,
        futureProofEnums: true,
        useImplementingTypes: true,
        allowEnumStringTypes: true,
        addUnderScoreToArgsType: true,
        maybeValue: 'T | null | undefined',
        inputMaybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null',
        documentVariableSuffix: 'TypedDocumentNodeVar',
        fragmentVariableSuffix: 'TypedFragmentNodeVar',
      },
    },
  },
  config: {
    withHooks: true,
    withHOC: false,
    withComponent: false,
    exposeQueryKeys: true,
    useTypeImports: true,
    preResolveTypes: false,
    legacyMode: false,
    emitLegacyCommonJSImports: false,
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;

// const config: CodegenConfig = {
//   require: ['ts-node/register'],
//   overwrite: true,
//   ignoreNoDocuments: true,
//   documents: [
//     'src/**/*.gql',
//     'src/**/*.graphql',
//     'src/types/graphql/*.ts',
//     'src/pages/**/*.tsx',
//     'src/components/**/*.tsx',
//   ],
//   schema: [
//     {
//       [`${process.env.HYGRAPH_READONLY_API_URL}`]: {
//         headers: {
//           Authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
//         },
//       },
//     },
//   ],
//   generates: {
//     './src/types/graphql/hygraph.types.ts': {
//       plugins: ['typescript'],
//       config: {
//         noNamespaces: true,
//         enumsAsTypes: true,
//         futureProofUnions: true,
//         futureProofEnums: true,
//         useImplementingTypes: true,
//         maybeValue: 'T | null | undefined',
//         inputMaybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null',
//         declarationKind: {
//           type: 'interface',
//           input: 'interface',
//         },
//       },
//     },

//     './src/types/graphql/ops/': {
//       plugins: ['typescript-operations'],
//       preset: 'near-operation-file',
//       presetConfig: {
//         extension: '.operation.ts',
//         baseTypesPath: 'hygraph.types.ts',
//       },
//       config: {
//         documentNodeImport: '@graphql-typed-document-node',
//         documentVariableSuffix: 'TypedDocumentNode',
//         fragmentVariableSuffix: 'TypedFragmentNode',
//         optimizeDocumentNode: true,
//         addUnderScoreToArgsType: true,
//       },
//     },
//     './src/pages/api/': {
//       plugins: ['typescript-graphql-request'],
//       preset: 'client-preset',
//       presetConfig: {
//         importOperationTypesFrom: './src/types/graphql/ops/',
//         fragmentMasking: { unmaskFunctionName: 'getTypedFragment' },
//       },
//       // config: {},
//     },
//   },
//   config: {
//     withHooks: true,
//     withHOC: false,
//     withComponent: false,
//     legacyMode: false,
//     exposeQueryKeys: true,
//     useTypeImports: true,
//     scalars: 'graphql-scalars/typings/scalars',
//     strictScalars: false,
//     exposeDocument: true,
//     emitLegacyCommonJSImports: false,
//   },
//   hooks: {
//     afterAllFileWrite: ['pnpm run format'],
//   },
// };

// export default config;
