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
  ignoreNoDocuments: true,
  overwrite: true,
  schema: {
    [process.env.HYGRAPH_READONLY_API_URL]: {
      // eslint-disable-next-line prettier/prettier
      // headers: {
      //   // eslint-disable-next-line prettier/prettier
      //   Authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_URL}`,
      // },
    },
  },
  require: ['ts-node/register'],
  generates: {
    '/src/pages/api/hygraph.ts': {
      // documents: ['/src/pages/api/graphql/*.gql'],
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        useTypeImports: true,
        typesSuffix: 'Type',
        interfaceSuffix: 'Interface',
        futureProofUnions: true,
        futureProofEnums: true,
      },
    },

    '/src/hooks/useHygraphQuery.ts': {
      // documents: ['/src/pages/api/graphql/*.gql'],
      plugins: ['typescript', 'typescript-operations'],
      preset: 'client-preset',
      config: {
        documentMode: 'string',
        useTypeImports: true,
        typesSuffix: 'Type',
        interfaceSuffix: 'Interface',
        futureProofUnions: true,
        futureProofEnums: true,
        withHooks: true,
      },
    },
  },
  config: {
    fetcher: 'graphql-request',
    exposeFetcher: true,
    exposeDocument: true,
    exposeQueryKeys: true,
    noNamespaces: true,
    documentModeImport: '@graphql-typed-document-node',
    legacyMode: false,
    strictScalars: true,
    scalars: 'graphql-scalars/typings/scalars',
    emitLegacyCommonJSImports: false,
  },
};

export default config;
