// import { type CodegenConfig } from '@graphql-codegen/cli';
// import type { IGraphQLConfig as GQLConfig, SchemaPointer } from 'graphql-config';

import * as path from 'path';
import * as dotenv from 'dotenv';

import { GraphQLString } from 'graphql';
import {
  typeDefs,
  resolvers,
  GraphQLDate,
  GraphQLDateTime,
  GraphQLHexadecimal,
  GraphQLJSON,
  GraphQLLong,
  GraphQLRGBA,
} from 'graphql-scalars';

dotenv.config({
  path: path.join(__dirname, '.env.development.local'),
  encoding: 'UTF-8',
});

console.log('...GENERATING GRAPHQL TYPES....');
console.log({
  'NODE_ENV': {
    [process.env.NODE_ENV]: {
      PORT: process.env.PORT,
      HOST: process.env.HOST,
      HYGRAPH_AUTH_TOKEN: process.env.HYGRAPH_API_AUTH_TOKEN,
      HYGRAPH_API_BASE_URL: process.env.HYGRAPH_API_BASE_URL,
    },
  },
});

if (process.env.NODE_ENV === 'development') {
  console.log(`codegen.ts in NODE_ENV:${process.env.NODE_ENV}`);
}
console.log('typeDefs', typeDefs);
console.log(resolvers);
/*
??? schema pointer bs WithList type...?
 {
  [`${process.env.HYGRAPH_API_BASE_URL}/content/cl2jezykc0li901yx24p50f8f/master`]: {
      headers: {
        'Authorization': `Bearer ${process.env.HYGRAPH_API_AUTH_TOKEN}`
      }
    }
}
*/

let schema;

const baseConfig = {
  schema: `${process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL}`,
  documents: [
    'src/app/lib/graphql/typeDefs.gql',
    'src/app/lib/graphql/fragments/*.gql',
    'src/app/lib/graphql/queries/*.gql',
    'src/app/lib/graphql/mutations/*.gql',
  ],
  exclude: ['src/types/**/*.ts', 'src/components/**/*.ts', 'src/components/**/*.tsx'],

  extensions: {
    codegen: {
      generates: {
        './src/app/lib/graphql/gen/hygraph-docnode.types.ts': {
          plugins: ['typescript', 'typed-document-node'],
        },

        './src/app/lib/graphql/gen/hygraph-client.ts': {
          plugins: ['typescript-operations', 'typescript-graphql-request'],
          preset: 'import-types',
          presetConfig: {
            filename: 'hygraph-docnode.types.ts',
          },
        },
      },
      config: {
        fetcher: 'graphql-request',
        futureProofUnions: true,
        futureProofEnums: true,

        scalars: {
          Date: 'graphql-scalars#GraphQLDate',
          DateTime: 'graphql-scalars#GraphQLDateTime',
          Hex: 'graphql-scalars#GraphQLHexadecimal',
          Json: 'graphql-scalars#GraphQLJSON',
          Long: 'graphql-scalars#GraphQLLong',
          RGBAHue: 'graphql-scalars#GraphQLRGBA',
          RGBATransparency: 'graphql-scalars#GraphQLRGBA',
          RichTextAST: 'graphql-scalars#GraphQLString',
        },
        strictScalars: true,
      },
    },
  },
};

export default baseConfig;

// const config: CodegenConfig = {
//   require: ['ts-node/register'],
//   overwrite: true,
//   ignoreNoDocuments: true,
//   documents: [
//     'src/**/*.gql',
//     'src/**/*.graphql',
//     'src/types/graphql/*.ts',
//     'src/pages/**/*.tsx',
//     'src/components/**/*.tsx',
//   ],
//   schema: [
//     {
//       [`${process.env.NEXT_PUBLIC_HYGRAPHCDN_BASE_URL}`]: {
//         headers: {
//           Authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
//         },
//       },
//     },
//   ],
//   generates: {
//     './src/types/graphql/hygraph.types.ts': {
//       plugins: ['typescript'],
//       config: {
//         noNamespaces: true,
//         enumsAsTypes: true,
//         futureProofUnions: true,
//         futureProofEnums: true,
//         useImplementingTypes: true,
//         maybeValue: 'T | null | undefined',
//         inputMaybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null',
//         declarationKind: {
//           type: 'interface',
//           input: 'interface',
//         },
//       },
//     },

//     './src/types/graphql/ops/': {
//       plugins: ['typescript-operations'],
//       preset: 'near-operation-file',
//       presetConfig: {
//         extension: '.operation.ts',
//         baseTypesPath: 'hygraph.types.ts',
//       },
//       config: {
//         documentNodeImport: '@graphql-typed-document-node',
//         documentVariableSuffix: 'TypedDocumentNode',
//         fragmentVariableSuffix: 'TypedFragmentNode',
//         optimizeDocumentNode: true,
//         addUnderScoreToArgsType: true,
//       },
//     },
//     './src/pages/api/': {
//       plugins: ['typescript-graphql-request'],
//       preset: 'client-preset',
//       presetConfig: {
//         importOperationTypesFrom: './src/types/graphql/ops/',
//         fragmentMasking: { unmaskFunctionName: 'getTypedFragment' },
//       },
//       // config: {},
//     },
//   },
//   config: {
//     withHooks: true,
//     withHOC: false,
//     withComponent: false,
//     legacyMode: false,
//     exposeQueryKeys: true,
//     useTypeImports: true,
//     scalars: 'graphql-scalars/typings/scalars',
//     strictScalars: false,
//     exposeDocument: true,
//     emitLegacyCommonJSImports: false,
//   },
//   hooks: {
//     afterAllFileWrite: ['pnpm run format'],
//   },
// };

// export default config;
