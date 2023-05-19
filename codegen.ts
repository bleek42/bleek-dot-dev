import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({
  path: path.join(__dirname, '.env.development.local'),
  encoding: 'UTF-8',
});

import { type CodegenConfig } from '@graphql-codegen/cli';

import {
  GraphQLJSON,
  GraphQLURL,
  GraphQLLocale,
  GraphQLDate,
  GraphQLDateTime,
  resolvers,
  GraphQLHexadecimal,
  GraphQLLong,
  GraphQLRGBA,
} from 'graphql-scalars';
import { GraphQLString } from 'graphql';

console.log('|=== GENERATING GRAPHQL TYPES WITH .graphqlrc.cjs ===|');
console.log({
  'NODE_ENV': {
    [process.env.NODE_ENV]: {
      PORT: process.env.PORT,
      HOST: process.env.HOST,
      HYGRAPH_AUTH_TOKEN: process.env.HYGRAPH_API_AUTH_TOKEN,
      HYGRAPH_API_BASE_URL: process.env.HYGRAPH_API_BASE_URL,
      NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN: process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN,
      NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL: process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL,
    },
  },
});

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  ignoreNoDocuments: true,

  schema: [
    {
      [`${process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/app/lib/graphql/**/*.gql'],

  generates: {
    // './src/app/lib/graphql/gen/docunode.types.ts': {
    //   plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    //   config: {
    //   },
    // },

    './src/app/lib/graphql/gen/': {
      plugins: ['typescript-graphql-request'],
      preset: 'client-preset',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'createFragment' },
      },
      config: {
        fetcher: 'graphql-request',
        pureMagicComment: true,
        experimentalFragmentVariables: true,
        useTypeImports: true,
        enumsAsTypes: true,
        futureProofUnions: true,
        strictScalars: true,
        emitLegacyCommonJSImports: false,
        defaultScalar: 'string',
        scalars: {
          Date: 'Date',
          DateTime: 'Date',
          Long: 'number',
          Hex: 'string',
          Json: 'string',
          RGBAHue: 'string',
          RGBATransparency: 'string',
          RichTextAST: 'string',
        },
      },
    },

    // importOperationTypesFrom: 'docunode.types.ts',
    //       documentMode: 'external',
    //       importDocumentNodeExternallyFrom: 'docunode.types.ts',
  },
};

export default config;

// './src/app/lib/graphql/gen/': {
//   plugins: ['typescript-graphql-request'],
//   preset: 'import-types',
//   presetConfig: {
//     filename: 'hyg.docnode.types.ts',
//   },
