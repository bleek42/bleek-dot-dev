import type { CodegenConfig } from '@graphql-codegen/cli';

import * as path from 'path';
import * as dotenv from 'dotenv';


dotenv.config({ path: path.join(__dirname, '.env.local'), encoding: 'UTF-8' });

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  ignoreNoDocuments: true,

  documents: [
    'src/types/graphql/queries.gql',
    'src/pages/**/*.ts',
    'src/pages/**/*.tsx',
    'src/components/**/*.ts',
    'src/components/**/*.tsx',
    '!src/types/graphql/gen/**/*.ts',
  ],
  schema: [
    {
      [`${process.env.HYGRAPH_READONLY_API_URL}/content/cl2jezykc0li901yx24p50f8f/master`]: {
        headers: {
          Authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
        },
      },
    },
  ],

  generates: {
    './src/types/graphql/gen/': {
      preset: 'client',
      presetConfig: {
        documentMode: 'string',
        fragmentMasking: { unmaskFunctionName: 'getFragment' },
      },
      config: {
        fetcher: 'graphql-request',
        useIndexSignature: true,
        exposeQueryKeys: true,
        exposeMutationKeys: true,
        useTypeImports: true,
        enumsAsTypes: true,
        useImplementingTypes: true,
        addUnderscoreToArgsType: true,
        operationResultSuffix: 'Result',
        declarationKind: {
          fragment: 'type',
          scalars: 'interface',
          input: 'interface',
        },
        legacyMode: false,
        emitLegacyCommonJSImports: false,
        experimentalFragmentVariables: true,
      },
    },
  },

  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
