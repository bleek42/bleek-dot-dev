import type { CodegenConfig } from '@graphql-codegen/cli';

import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '.env.development.local'),
  encoding: 'UTF-8',
});

console.log('...GENERATING GRAPHQL TYPES....');
console.table({
  [process.env.NODE_ENV]: {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    HYGRAPH_AUTH_TOKEN: process.env.HYGRAPH_AUTH_TOKEN,
    HYGRAPH_API_BASE_URL: process.env.HYGRAPH_API_BASE_URL,
  },
});

if (process.env.NODE_ENV === 'development') {
  console.log(`codegen.ts in NODE_ENV:${process.env.NODE_ENV}`);
}

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  ignoreNoDocuments: true,

  documents: [
    'src/app/lib/graphql/typeDefs.gql',
    'src/app/lib/graphql/fragments/*.gql',
    'src/app/lib/graphql/queries/*.gql',
    'src/app/lib/graphql/mutations/*.gql',
  ],

  schema: [
    {
      [`${process.env.HYGRAPH_API_BASE_URL}/v2/cl2jezykc0li901yx24p50f8f/master`]: {
        headers: {
          Authorization: `Bearer ${process.env.HYGRAPH_API_AUTH_TOKEN}`,
        },
      },
    },
  ],

  generates: {
    './src/app/lib/graphql/gen/': {
      preset: 'client-preset',
      presetConfig: {
        documentMode: '@graphql-typed-document-node/core',
        optimizeDocumentNode: true,
        fragmentMasking: { unmaskFunctionName: 'getFragment' },
      },
      config: {
        fetcher: 'graphql-request',
        useIndexSignature: true,
        exposeQueryKeys: true,
        exposeMutationKeys: true,
        useTypeImports: true,
        enumsAsTypes: true,
        futureProofTypes: true,
        useImplementingTypes: true,
        addUnderscoreToArgsType: true,
        operationResultSuffix: 'Result',
        emitLegacyCommonJSImports: false,
      },
    },
  },

  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
