import { type CodegenConfig } from '@graphql-codegen/cli';

import * as path from 'path';
import * as dotenv from 'dotenv';
import { GraphQLID } from 'graphql';

dotenv.config({
  path: path.join(__dirname, '.env.development.local'),
  encoding: 'UTF-8',
});

console.log('|=== GENERATING GRAPHQL TYPES WITH .graphqlrc.cjs ===|');
console.log({
  'NODE_ENV': {
    [process.env.NODE_ENV]: {
      PORT: process.env.PORT,
      HOST: process.env.HOST,
      HYGRAPH_API_AUTH_TOKEN: process.env.HYGRAPH_API_AUTH_TOKEN,
      HYGRAPH_API_BASE_URL: process.env.HYGRAPH_API_BASE_URL,
      NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN: process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN,
      NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL: process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL,
    },
  },
});

const now: Date = new Date();
console.log(now.getTime());

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  // ignoreNoDocuments: true,

  schema: [
    {
      [`${process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN}`,
        },
      },
    },
  ],
  documents: [
    'src/app/lib/graphql/typeDefs.gql',
    'src/app/lib/graphql/fragments.gql',
    'src/app/lib/graphql/queries.gql',
    // 'src/app/lib/graphql/mutations.gql',
  ],

  generates: {
    './src/types/hygraph.types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        addUnderscoreToArgsType: true,
      },
    },

    './src/app/lib/graphql/gen/': {
      preset: 'client-preset',
      presetConfig: {
        unmaskFunctionName: 'createTypedFragment',
      },
      config: {
        documentMode: 'string',
      },
    },

    // './src/app/lib/graphql/gen/client.ts': {
    //   plugins: ['typescript-graphql-request'],
    //   preset: 'import-types',
  },
  config: {
    fetcher: 'graphql-request',
    pureMagicComment: true,
    addUnderscoreToArgsType: true,
    useTypeImports: true,
    futureProofUnions: true,
    enumsAsTypes: true,
    enumPrefix: false,
    enumSuffix: 'Fields',
    defaultScalar: 'unknown',
    scalars: {
      ID: 'number | unknown',
      Date: 'Date | string | unknown',
      DateTime: 'Date | string | unknown',
      Long: 'number',
      Hex: 'string | unknown',
      Json: 'string[] | string | unknown[] | unknown',
      RGBAHue: 'string | unknown',
      RGBATransparency: 'string | unknown',
      RichTextAST: 'string[] | string | unknown[] | unknown',
    },
  },
};

export default config;

// './src/app/lib/graphql/gen/': {
//   plugins: ['typescript-graphql-request'],
//   preset: 'import-types',
//   presetConfig: {
//     filename: 'hyg.docnode.types.ts',
//   },
