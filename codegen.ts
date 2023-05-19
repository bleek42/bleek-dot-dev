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
// import { GraphQLString, GraphQLI } from 'graphql';

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
    'src/app/lib/graphql/mutations.gql',
  ],

  generates: {
    './src/app/lib/graphql/gen/': {
      preset: 'client',
      config: {
        pureMagicComment: true,
        experimentalFragmentVariables: true,
        enumsAsTypes: true,
        futureProofUnions: true,
        addUnderscoreToArgsType: true,
        documentMode: 'TypedDocumentNode',
        documentNodeImport: '@graphql-typed-document-node/core#TypedDocumentNode',
        fetcher: 'graphql-request',
        useTypeImports: true,
        defaultScalar: 'unknown',
        scalars: {
          ID: 'graphql#GraphQLID',
          Date: 'Date',
          DateTime: 'Date',
          Long: 'graphql#GraphQLFloat',
          Hex: 'string',
          Json: 'string',
          RGBAHue: 'string',
          RGBATransparency: 'string',
          RichTextAST: 'string',
        },
        emitLegacyCommonJSImports: false,
      },
    },

    // './src/app/lib/graphql/gen/client.ts': {
    //   plugins: ['typescript-graphql-request'],
    //   preset: 'import-types',
    //   presetConfig: {    documentMode: 'TypedDocumentNode',
  },
  config: {},
};

export default config;

// './src/app/lib/graphql/gen/': {
//   plugins: ['typescript-graphql-request'],
//   preset: 'import-types',
//   presetConfig: {
//     filename: 'hyg.docnode.types.ts',
//   },
