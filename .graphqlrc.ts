import type { CodegenConfig } from '@graphql-codegen/cli';
import type { IGraphQLConfig as GQLConfig, SchemaPointer } from 'graphql-config';

import * as path from 'path';
import * as dotenv from 'dotenv';

import {
  GraphQLJSON,
  GraphQLURL,
  GraphQLLocale,
  GraphQLDate,
  GraphQLDateTime,
  resolvers,
} from 'graphql-scalars';

dotenv.config({ path: path.join(__dirname, '.env.local'), encoding: 'UTF-8' });

// console.table({
//   NODE_ENV: process.env.NODE_ENV,
//   PORT: process.env.PORT,
//   HYGRAPH_READONLY_API_URL: process.env.HYGRAPH_READONLY_API_URL,
//   HYGRAPH_READONLY_API_KEY: process.env.HYGRAPH_READONLY_API_KEY,
// });

const baseConfig: GQLConfig = {
  schema: `${process.env.HYGRAPH_READONLY_API_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
  documents: ['src/**/*.gql', 'src/**/*.graphql', 'src/pages/api/*.ts', 'src/pages/*.tsx'],
  include: ['src/components/**/*.ts', 'src/components/**/*.tsx'],
  exclude: ['src/types/gen/*.ts', 'src/types/graphql/gen/*.ts'],

  extensions: {
    codegen: {
      generates: {
        './src/types/gen/': {
          plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
          preset: 'import-modules',
          presetConfig: {
            baseTypesPath: 'src/types/graphql/types.ts',
            filename: 'hygraph.types.ts',
          },
          },
          config: {
            fetcher: 'graphql-request',
            futureProofUnions: true,
            futureProofEnums: true,

            scalars: {
              ID: 'graphql#GraphQLID',
              String: 'graphql#GraphQLString',
              Boolean: 'graphql#GraphQLBoolean',
              Int: 'graphql#GraphQLInt',
              Float: 'graphql#GraphQLFloat',
              Date: 'graphql-scalars#GraphQLString',
              DateTime: 'graphql-scalars#GraphQLString',
              Hex: 'graphql-scalars#GraphQLString',
              Json: 'graphql-scalars#GraphQLString',
              Long: 'graphql-scalars#GraphQLNumber',
              RGBAHue: 'graphql#GraphQLString',
              RGBATransparency: 'graphql#GraphQLString',
              RichTextAST: 'graphql#GraphQLString',
            },
            strictScalars: false,
        },
      },
    },
  },
}

export default baseConfig;

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
