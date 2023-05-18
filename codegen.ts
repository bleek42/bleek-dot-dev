// import { type CodegenConfig } from '@graphql-codegen/cli';

// import * as path from 'path';
// import * as dotenv from 'dotenv';

// import {
//   GraphQLJSON,
//   GraphQLURL,
//   GraphQLLocale,
//   GraphQLDate,
//   GraphQLDateTime,
//   resolvers,
//   GraphQLHexadecimal,
//   GraphQLLong,
//   GraphQLRGBA,
// } from 'graphql-scalars';
// import { GraphQLString } from 'graphql';

// dotenv.config({
//   path: path.join(__dirname, '.env.development.local'),
//   encoding: 'UTF-8',
// });

// const config: CodegenConfig = {
//   require: ['ts-node/register'],
//   overwrite: true,
//   ignoreNoDocuments: true,

//   documents: [
//     'src/app/lib/graphql/fragments/*.gql',
//     'src/app/lib/graphql/queries/*.gql',
//     'src/app/lib/graphql/mutations/*.gql',
//   ],

//   schema: [
//     {
//       [`${process.env.HYGRAPH_API_BASE_URL}`]: {
//         headers: {
//           Authorization: `Bearer ${process.env.HYGRAPH_API_AUTH_TOKEN}`,
//         },
//       },
//     },
//   ],

//   generates: {
//     './src/app/lib/graphql/gen/': {
//       preset: 'client-preset',
//       presetConfig: {
//         fragmentMasking: { unmaskFunctionName: 'getFragment' },
//         strictScalars: true,
//       },
//       config: {
//         strictScalars: true,
//         scalars: {},
//       },
//     },
//   },
// };

// export default config;
