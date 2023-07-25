import { type CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
import * as path from 'path';

// dotenv.config({
//   path: path.join(__dirname, '.env.development.local'),
//   encoding: 'UTF-8',
// });

console.log('|=== GENERATING GRAPHQL TYPES ===|');

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  ignoreNoDocuments: false,

  schema: [process.env.NEXT_PUBLIC_HYGRAPH_CDN_URL, 'schema.json'],
  documents: [
    // 'ast.gql',
    // 'src/types/graphql/ast.gql',
    'src/types/graphql/typeDefs.gql',
    'src/types/graphql/fragments.gql',
    'src/types/graphql/queries/*.gql',
    'src/types/graphql/mutations/*.gql',
    '!src/types/graphql/*.ts',
  ],

  generates: {
    'schema.json': {
      plugins: ['introspection'],
      config: {
        descriptions: true,
        schemaDescription: true,
      },
    },

    'src/types/graphql/typeDefs.gql': {
      plugins: ['schema-ast'],
      config: {
        commentDescriptions: true,
        includeIntrospectionTypes: true,
      },
    },

    'src/types/graphql/gen/hygraph-types.ts': {
      plugins: ['typescript'],
      config: {
        futureProofUnions: true,
        enumsAsTypes: true,
        addUnderscoreToArgsType: true,
        useImplementingTypes: true,
        declarationKind: {
          interface: 'interface',
          input: 'interface',
        },
      },
    },

    'src/types/graphql/gen/': {
      plugins: ['typescript-operations', 'typescript-graphql-request'],
      preset: 'near-operation-file',
      presetConfig: {
        // cwd: './src/types/graphql',
        folder: '../gen',
        extension: '.operation.ts',
        baseTypesPath: './hygraph-types.ts',
      },
    },
  },
  config: {
    useTypeImports: true,
    defaultScalar: 'string | symbol | unknown',
    scalars: {
      ID: 'string | number | symbol | unknown',
      Date: 'Date | string | symbol | unknown',
      DateTime: 'Date | string | symbol | unknown',
      Long: 'number | BigInt | string | symbol | unknown',
      Json: 'string[] | string | symbol | unknown',
      RichTextAST: 'string[] | string | symbol | unknown',
    },
  },
  // hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
