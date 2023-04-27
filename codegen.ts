import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
import * as path from 'path';

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
    'src/**/*.gql',
    'src/**/*.graphql',
    'src/types/graphql/*.ts',
    'src/pages/**/*.tsx',
    'src/components/**/*.tsx',
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
    './src/types/graphql/hygraph.types.ts': {
      plugins: ['typescript'],
      config: {
        noNamespaces: true,
        useImplementingTypes: true,
      },
    },

    './src/types/graphql/': {
      plugins: ['typescript-operations'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.operation.ts',
        baseTypesPath: 'hygraph.types.ts',
      },
      config: {
        allowEnumStringTypes: true,
        documentVariableSuffix: 'DocumentNode',
        fragmentVariableSuffix: 'FragmentNode',
        optimizeDocumentNode: true,
        addUnderScoreToArgsType: true,
      },
    },
    './src/pages/api/': {
      plugins: ['typescript-graphql-request'],
      preset: 'client-preset',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragment' },
      },
      config: {
        persistedDocuments: true,
        importOperationTypesFrom: './src/types/graphql/',
        experimentalFragmentVariables: true, // ! experimental
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
    exposeDocument: true,
    documentNodeImport: '@graphql-typed-document-node',
    scalars: {
      Date: 'graphql-scalars#Date',
      DateTime: '',
      URL: '',
      JSON: '',
      Locale: '',
    },
    strictScalars: false,
    enumsAsTypes: true,
    futureProofUnions: true,
    futureProofEnums: true,
    declarationKind: {
      type: 'interface',
      input: 'interface',
    },
    maybeValue: 'T | null | undefined',
    inputMaybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null',
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
