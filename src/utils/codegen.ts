import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    [`${process.env.HYGRAPH_READONLY_API_URL}`]: {
      // eslint-disable-next-line prettier/prettier
      headers: {
        // eslint-disable-next-line prettier/prettier
        Authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_URL}`,
      },
    },
  },
  ignoreNoDocuments: true,
  require: ['ts-node/register'],
  generates: {
    './src/pages/api/hygraph.ts': {
      documents: ['src/**/*.tsx'],
      preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  config: {
    exposeDocument: true,
    exposeQueryKeys: true,
    strictScalars: true,
    legacyMode: false,
  },
};

export default config;
