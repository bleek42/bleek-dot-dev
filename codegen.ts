import * as dotenv from 'dotenv';
import { type IGraphQLConfig } from 'graphql-config';

dotenv.config({ path: '.env.development.local' });

console.log(process.env.GH_TOKEN);

console.log('|=== GENERATING GRAPHQL TYPES ===|');

const config: IGraphQLConfig = {
  // ignoreNoDocuments: true,
  // emitLegacyCommonJSImports: false,
  // schema: ['schema.json'],

  // documents: [
  //   // ? these 2 first...

  // ],

  projects: {
    hygraphSchema: {
      schema:
        'https://us-east-1.cdn.hygraph.com/content/cl2jezykc0li901yx24p50f8f/master',

      extensions: {
        codegen: {
          overwrite: true,
          ignoreNoDocuments: true,
          generates: {
            'src/graphql/hygraph.schema.json': {
              plugins: ['introspection'],
              config: {
                descriptions: true,
                schemaDescription: true,
              },
            },
          },
        },
      },
    },

    githubSchema: {
      schema: [
        {
          'https://api.github.com/graphql': {
            headers: {
              'User-Agent': 'graphql-codegen',
              'Authorization': `Bearer ${process.env.GH_TOKEN}`,
            },
          },
        },
      ],

      extensions: {
        codegen: {
          overwrite: true,
          ignoreNoDocuments: true,
          generates: {
            'src/graphql/gh-api.schema.json': {
              plugins: ['introspection'],
              config: {
                descriptions: true,
                schemaDescription: true,
              },
            },
          },
        },
      },
    },

    hygraphDefs: {
      schema: 'src/graphql/hygraph.schema.json',

      extensions: {
        codegen: {
          overwrite: true,
          ignoreNoDocuments: true,

          generates: {
            'src/graphql/typeDefs/hygraph.defs.gql': {
              plugins: ['schema-ast'],
              config: {
                commentDescriptions: true,
                includeIntrospectionTypes: true,
              },
            },
          },
        },
      },
    },

    githubDefs: {
      schema: 'src/graphql/gh-api.schema.json',

      extensions: {
        codegen: {
          overwrite: true,
          ignoreNoDocuments: true,

          generates: {
            'src/graphql/typeDefs/gh-api.defs.gql': {
              plugins: ['schema-ast'],
              config: {
                commentDescriptions: true,
                includeIntrospectionTypes: true,
              },
            },
          },
        },
      },
    },

    hygraphTypes: {
      schema: ['src/graphql/hygraph.schema.json'],
      documents: [
        'src/graphql/fragments/*.gql',
        'src/graphql/typeDefs/*.gql',
        'src/graphql/queries/*.gql',
        '!src/graphql/**/*.ts',
        '!src/graphql/mutations/*.gql',
      ],

      extensions: {
        codegen: {
          overwrite: true,
          ignoreNoDocuments: false,
          generates: {
            'src/graphql/typeDefs/hygraph.ts': {
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
          },
        },
      },
    },

    hygraphOperations: {
      schema: 'src/graphql/hygraph.schema.json',
      documents: [
        'src/graphql/typeDefs/hygraph.defs.gql',
        'src/graphql/fragments/*.gql',
        'src/graphql/typeDefs/*.gql',
        'src/graphql/queries/*.gql',
        '!src/graphql/**/*.ts',
        '!src/graphql/mutations/*.gql',
      ],

      extensions: {
        codegen: {
          overwrite: true,
          ignoreNoDocuments: false,

          generates: {
            'src/graphql/': {
              plugins: ['typescript-operations', 'typescript-graphql-request'],
              preset: 'near-operation-file',
              presetConfig: {
                documentMode: 'string',
                extension: '.operation.ts',
                baseTypesPath: './typeDefs/hygraph.ts',
              },
            },
          },
        },
      },
    },
  },

  // generates: {
  //   'src/graphql/gh-api.schema.json': {
  //     plugins: ['introspection'],
  //     config: {
  //       descriptions: true,
  //       schemaDescription: true,
  //     },
  //   },

  // 'src/graphql/typeDefs/types.ts': {
  //   schema: 'src/graphql/typeDefs/*.gql',
  // },

  // hooks: { afterAllFileWrite: ['prettier --write ./src/graphql/**/*.ts'] },
};

export default config;
