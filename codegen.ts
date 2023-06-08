import { type CodegenConfig } from '@graphql-codegen/cli';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { GraphQLID } from 'graphql';

dotenv.config({
  path: path.join(__dirname, '.env.development.local'),
  encoding: 'UTF-8',
});

console.log('|=== GENERATING GRAPHQL TYPES ===|');

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  // ignoreNoDocuments: true,

  schema: './schema.json',
  documents: [
    // './src/app/lib/graphql/ast.gql',
    'src/app/lib/graphql/ast.gql',
    'src/app/lib/graphql/queries/*.gql',
    'src/app/lib/graphql/queries/*.graphql',
    '!src/app/lib/graphql/gen/*',
    '!src/types/**/*',
  ],

  generates: {
    //   './schema.json': {
    //     plugins: ['introspection'],
    //     config: {
    //       schemaDescription: true,
    //     },
    //     schema: {
    //       'https://api-us-east-1.hygraph.com/v2/cl2jezykc0li901yx24p50f8f/master': {
    //         headers: {
    //           'Authorization': `Bearer ${process.env.HYGRAPH_API_AUTH_TOKEN}`,
    //         },
    //       },
    //     },
    //   },

    'src/app/lib/graphql/ast.gql': {
      plugins: ['schema-ast'],
      config: {
        commentDescriptions: true,
        includeIntrospectionTypes: true,
      },
    },

    'src/types/hygraph-types.ts': {
      plugins: ['typescript', 'typed-document-node'],
      config: {
        useTypeImports: true,
        futureProofUnions: true,
        enumsAsTypes: true,
        addUnderscoreToArgsType: true,
        useImplementingTypes: true,
        declarationKind: {
          interface: 'interface',
          type: 'interface',
          mutation: 'interface',
        },
      },
    },

    'src/types/': {
      plugins: ['typescript-operations', 'typescript-graphql-request'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.operation.ts',
        baseTypesPath: 'hygraph-types.ts',
      },
      config: {
        useTypeImports: true,
        futureProofUnions: true,
        enumsAsTypes: true,
        addUnderscoreToArgsType: true,
        useImplementingTypes: true,
        declarationKind: {
          interface: 'interface',
          type: 'interface',
          mutation: 'interface',
        },
      },
    },

    'src/app/lib/graphql/gen/': {
      preset: 'client-preset',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'createFragment' },
      },
      config: {
        documentMode: 'string',
        pureMagicComment: true,
        experimentalFragmentVariables: true,
      },
    },
  },
  config: {
    defaultScalar: 'unknown',
    scalars: {
      ID: 'string | number',
      Date: 'Date | string',
      DateTime: 'Date | string',
      Long: 'number | unknown',
      Hex: 'string | unknown',
      Json: 'string[] | unknown',
      RGBAHue: 'string',
      RGBATransparency: 'string',
      RichTextAST: 'string[] | unknown',
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
