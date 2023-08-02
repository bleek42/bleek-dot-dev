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
  // emitLegacyCommonJSImports: false,

  schema: [process.env.HYGRAPH_CDN_URL, 'schema.json'],
  documents: [
    // ? these 2 first...
    'src/graphql/typeDefs.gql',
    'src/graphql/queries/*.gql',
    '!src/graphql/**/*.ts',
    // 'src/graphql/fragments.gql',
    // 'src/graphql/mutations/*.gql',
  ],

  generates: {
    // 'schema.json': {
    //   plugins: ['introspection'],
    //   config: {
    //     descriptions: true,
    //     schemaDescription: true,
    //   },
    // },

    // 'src/graphql/typeDefs.gql': {
    //   plugins: ['schema-ast'],
    //   config: {
    //     commentDescriptions: true,
    //     includeIntrospectionTypes: true,
    //   },
    // },

    'src/graphql/hygraph-types.ts': {
      plugins: ['typescript'],
      config: {
        futureProofUnions: true,
        enumsAsTypes: true,
        addUnderscoreToArgsType: true,
        useImplementingTypes: true,
        useTypeImports: true,
        declarationKind: {
          interface: 'interface',
          input: 'interface',
        },
        defaultScalar: 'string | symbol | number | unknown',
        scalars: {
          Date: 'Date | string | symbol | number | unknown',
          DateTime: 'Date | string | symbol | number | unknown',
          Long: 'BigInt | number | string | symbol | unknown',
          Json: 'string[] | string | symbol | unknown',
          RichTextAST: 'string[] | string | symbol | unknown',
        },
      },
    },

    'src/graphql/': {
      plugins: ['typescript-operations', 'typescript-graphql-request'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.operation.ts',
        baseTypesPath: './hygraph-types.ts',
      },
    },
  },
  config: {
    documentMode: 'string',
  },

  hooks: { afterAllFileWrite: ['prettier --write ./src/graphql/**/*.ts'] },
};

export default config;
