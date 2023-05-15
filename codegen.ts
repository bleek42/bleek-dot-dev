import type { CodegenConfig } from '@graphql-codegen/cli';

import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '.env.development.local'),
  encoding: 'UTF-8',
});

if (process.env.NODE_ENV === 'development') {
  console.log(`codegen.ts in NODE_ENV:${process.env.NODE_ENV}`);
}

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  ignoreNoDocuments: true,

  documents: [
    'src/app/graphql/queries/*.gql',
    'src/app/lib/graphql/mutations/*.gql',
    'src/pages/**/*.tsx',
    'src/hooks/*.ts',
    'src/utils/*.ts',
    '!src/types/**/*.ts',
    '!src/types/**/*.tsx',
  ],

  schema: [
    {
      [`${process.env.NEXT_PUBLIC_HYGRAPHCDN_BASE_URL}/v2/cl2jezykc0li901yx24p50f8f/master`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPHCDN_AUTH_TOKEN}`,
          },
        },
    },
  ],

  generates: {
    './src/app/lib/graphql/': {
      preset: 'client',
      presetConfig: {
        optimizeDocumentNode: true,
        fragmentMasking: { unmaskFunctionName: 'getFragment' },
      },
      config: {
        // fetcher: 'graphql-request',
        useIndexSignature: true,
        exposeQueryKeys: true,
        exposeMutationKeys: true,
        useTypeImports: true,
        enumsAsTypes: true,
        futureProofTypes: true,
        useImplementingTypes: true,
        addUnderscoreToArgsType: true,
        operationResultSuffix: 'Result',
      },
    },
  },

  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
