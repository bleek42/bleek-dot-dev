import type { CodegenConfig } from '@graphql-codegen/cli';

import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '.env.development.local'),
  encoding: 'UTF-8',
});

console.log('...GENERATING GRAPHQL TYPES....');
console.log({
  'NODE_ENV': {
    [process.env.NODE_ENV]: {
      PORT: process.env.PORT,
      HOST: process.env.HOST,
      HYGRAPH_AUTH_TOKEN: process.env.HYGRAPH_API_AUTH_TOKEN,
      HYGRAPH_API_BASE_URL: process.env.HYGRAPH_API_BASE_URL,
    },
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
    'src/app/lib/graphql/fragments/*.gql',
    'src/app/lib/graphql/queries/*.gql',
    'src/app/lib/graphql/mutations/*.gql',
  ],

  schema: [
    {
      [`${process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL}`]: {
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
        optimizeDocumentNode: true,
        fragmentMasking: { unmaskFunctionName: 'getFragment' },
      },
      config: {
        useIndexSignature: true,
        exposeQueryKeys: true,
        exposeMutationKeys: true,
        useTypeImports: true,
        enumsAsTypes: true,
        futureProofTypes: true,
        addUnderscoreToArgsType: true,
        operationResultSuffix: 'Result',
        defaultScalarType: 'string',
      },
    },
  },

  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
