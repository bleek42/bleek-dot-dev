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

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  // ignoreNoDocuments: true,

  schema: './schema.json',
  documents: [
    './src/app/lib/graphql/*.gql',
    './src/app/lib/graphql/*.graphql',
    '!./src/app/lib/graphql/**/*.ts',
  ],

  generates: {
    './schema.json': {
      plugins: ['introspection'],
      config: {
        schemaDescription: true,
      },
      schema: {
        'https://api-us-east-1.hygraph.com/v2/cl2jezykc0li901yx24p50f8f/master': {
          headers: {
            'Authorization': `Bearer ${process.env.HYGRAPH_API_AUTH_TOKEN}`,
          },
        },
      },
    },

    // './gh.schema.json': {
    //   plugins: ['introspection'],
    //   config: {
    //     schemaDescription: true,
    //   },
    //   schema: {
    //     'github:user/repo#branchName:path/to/file.graphql': {
    //       headers: {
    //         'Authorization': `Bearer ${process.env?.GH_AUTH_TOKEN || ''}`,
    //       },
    //     },
    //   },
    // },

    './src/types/hygraph.types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        addUnderscoreToArgsType: true,
      },
    },

    './src/app/lib/graphql/gen/': {
      preset: 'client-preset',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'createTypedFragment' },
      },
      config: {
        documentMode: 'TypedDocumentNode',
      },
    },

    // './src/app/lib/graphql/gen/client.ts': {
    //   plugins: ['typescript-graphql-request'],
    //   preset: 'import-types',
  },
  config: {
    fetcher: 'graphql-request',
    useTypeImports: true,
    futureProofUnions: true,
    enumsAsTypes: true,
    enumPrefix: false,
    enumSuffix: 'Field',
    declarationKind: {
      input: 'interface',
      type: 'interface',
    },
    defaultScalar: 'unknown',
    scalars: {
      ID: 'string | unknown',
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
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;

// './src/app/lib/graphql/gen/': {
//   plugins: ['typescript-graphql-request'],
//   preset: 'import-types',
//   presetConfig: {
//     filename: 'hyg.docnode.types.ts',
//   },
