import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local'), encoding: 'UTF-8' });

console.table({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HYGRAPH_READONLY_API_URL: process.env.HYGRAPH_READONLY_API_URL,
  HYGRAPH_READONLY_API_KEY: process.env.HYGRAPH_READONLY_API_KEY,
});

const config: CodegenConfig = {
  documents: ['types/**/*.{gql,graphql,ts}', 'pages/**/*.tsx', 'components/**/*.tsx'],
  ignoreNoDocuments: true,
  overwrite: true,
  require: ['ts-node/register'],
  schema: [
    {
      [process.env.HYGRAPH_READONLY_API_URL]: {
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
        useTypeImports: true,
        scalars: '/node_modules/graphql-scalars/esm/typeDefs.js',
        strictScalars: false,
        noNamespaces: true,
        futureProofUnions: true,
        futureProofEnums: true,
        useImplementingTypes: true,
        declarationKind: {
          type: 'interface',
          input: 'interface',
        },
      },
    },

    './src/utils/gql-req-client.ts': {
      plugins: ['typescript-operations', 'typed-document-node', 'typescript-graphql-request'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'src/types/graphql/hygraph.types.ts',
        extension: '.request.ts',
        fileName: 'src/pages/api/hygraph',
      },
      config: {
        documentMode: 'documentNode',
        documentNodeImport: '@graphql-typed-document-node',
        documentVariableSuffix: 'TypedDocumentNode',
        fragmentVariableSuffix: 'TypedFragmentNode',
        optimizeDocumentNode: true,
        addUnderScoreToArgsType: true,
      },
    },

    // './src/hooks/useHygraphQuery.ts': {
    // preset: 'client-preset',
    // presetConfig: {
    // fragmentMasking: { unmaskFunctionName: 'getTypedFragment' },
    // },
    // config: {
    // documentMode: 'string',
    // withHooks: true,
    // withHOC: false,
    // withComponent: false,
    // legacyMode: false,
    // namingConvention: 'change-case-all#camelCase',
    // exposeQueryKeys: true,
    // },
    // },
  },
  config: {
    exposeFetcher: true,
    exposeDocument: true,
    useTypeImports: true,
    emitLegacyCommonJSImports: false,
  },
  hooks: {
    afterAllFileWrite: ['pnpm run format'],
  },
};

export default config;
