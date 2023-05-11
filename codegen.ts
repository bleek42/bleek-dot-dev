import type { CodegenConfig } from '@graphql-codegen/cli';

import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '.env.local'), encoding: 'UTF-8' });

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  ignoreNoDocuments: true,

  documents: [
    'src/pages/api/graphql/queries/*.gql',
    'src/pages/api/graphql/mutations/*.gql',
    'src/pages/**/*.tsx',
    'src/hooks/*.ts',
    'src/utils/*.ts',
    '!src/types/**/*.ts',
    '!src/types/**/*.tsx',
  ],

  schema: [
    {
      [`${process.env.NEXT_PUBLIC_HYGRAPHCDN_BASE_URL}/content/cl2jezykc0li901yx24p50f8f/master`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPHCDN_AUTH_TOKEN}`,
          },
        },
    },
  ],

  generates: {
    './src/pages/api/graphql/': {
      preset: 'client',
      presetConfig: {
        documentMode: 'string',
        // optimizeDocumentNode: true,
        fragmentMasking: { unmaskFunctionName: 'getFragment' },
      },
      config: {
        // fetcher: 'graphql-request',
        // useIndexSignature: true,
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
