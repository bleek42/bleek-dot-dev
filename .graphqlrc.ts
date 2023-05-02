import type { IGraphQLConfig as GQLConfig, SchemaPointer } from 'graphql-config';

const graphqlConfig: GQLConfig = {
  schema: `${process.env.HYGRAPH_READONLY_API_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
  documents: ['src/**/*.gql', 'src/**/*.graphql', 'src/pages/**/*.ts', 'src/pages/**/*.tsx'],
  include: ['src/components/**/*.ts', 'src/components/**/*.tsx'],
  exclude: ['src/**/gen/*.ts', 'src/types/gen/**/*.ts'],
  extensions: {
    codegen: {
      generates: {
        'src/types/gen/': {
          plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
          preset: 'graphql-modules',
          presetConfig: {
            baseTypesPath: 'src/types/graphql/types.ts',
            filename: 'hygraph.ts',
          },
          config: {
            fetcher: 'graphql-request',
            useTypeImports: true,
            enumsAsTypes: true,
            useImplementingTypes: true,
            addUnderscoreToArgsType: true,
            futureProofUnions: true,
            futureProofEnums: true,
            declarationKind: {
              fragment: 'type',
              scalar: 'class',
              input: 'interface',
            },
            scalars: {
              ID: 'graphql#GraphQLID',
              String: 'graphql#GraphQLString',
              Boolean: 'graphql#GraphQLBoolean',
              Int: 'graphql#GraphQLInt',
              Float: 'graphql#GraphQLFloat',
              Date: 'graphql-scalars#GraphQLDate',
              DateTime: 'graphql-scalars#GraphQLDateTime',
              Hex: 'graphql-scalars#GraphQLHexadecimal',
              Json: 'graphql-scalars#GraphQLJSON',
              Long: 'graphql-scalars#GraphQLLong',
              RGBAHue: 'graphql-scalars#GraphQLRGBA',
              RGBATransparency: 'graphql-scalars#GraphQLRGBA',
              RichTextAST: 'graphql#GraphQLString',
            },
            strictScalars: true,
            operationResultSuffix: 'Result',
            legacyMode: false,
            emitLegacyCommonJSImports: false,
            // experimentalFragmentVariables: true,
          },
        },
      },
    },
  },
};
