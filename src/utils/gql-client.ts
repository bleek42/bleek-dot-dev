import type { RequestDocument } from 'graphql-request';

import { GraphQLClient, request } from 'graphql-request';

// export const createGraphQLRequest = async (
//   url: string,
//   doc?: RequestDocument
// ): Promise<void | Error | unknown> => {
//   const client: GraphQLClient = new GraphQLClient(url, {
//     headers: {
//       authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
//     },
//   });

//   try {
//     const req = await client.request(doc);
//     console.log(req);
//   } catch (err: unknown) {
//     console.error(err);
//     if (err) throw Error(err);
//     throw Error('unknown err creating gql request client');
//   }
// };

const gqlClient: GraphQLClient = new GraphQLClient(process.env.HYGRAPH_READONLY_API_URL, {
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
  },
});

export default gqlClient;
