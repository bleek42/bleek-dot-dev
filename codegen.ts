import { type CodegenConfig } from '@graphql-codegen/cli';

console.log('|=== GENERATING GRAPHQL TYPES ===|');

const config: CodegenConfig = {
  require: ['ts-node/register'],
  overwrite: true,
  ignoreNoDocuments: false,
  emitLegacyCommonJSImports: false,
  schema: [
    {
      'https://api.github.com/graphql': {
        headers: {
          'User-Agent': 'graphql-codegen',
          'Authorization': `Bearer ${process.env.GH_TOKEN}`,
        },
      },
    },
    `${process.env.HYGRAPH_API_URL}`,
    'schema.json',
  ],

  documents: [
    // ? these 2 first...
    'src/graphql/fragments.gql',
    'src/graphql/typeDefs/*.gql',
    'src/graphql/queries/*.gql',
    '!src/graphql/**/*.ts',
    // 'src/graphql/mutations/*.gql',
  ],

  generates: {
    'src/graphql/schema.json': {
      plugins: ['introspection'],
      config: {
        descriptions: true,
        schemaDescription: true,
      },
    },

    'src/graphql/typeDefs/typeDefs.gql': {
      plugins: ['schema-ast'],
      config: {
        commentDescriptions: true,
        includeIntrospectionTypes: true,
      },
    },

    'src/graphql/typeDefs/hygraph-types.ts': {
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
        documentMode: 'string',
        extension: '.operation.ts',
        baseTypesPath: './typeDefs/hygraph-types.ts',
        folder: './src/graphql/typeDefs',
      },
    },
  },

  hooks: { afterAllFileWrite: ['prettier --write ./src/graphql/**/*.ts'] },
};

export default config;
