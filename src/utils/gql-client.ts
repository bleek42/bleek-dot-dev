import type { RequestDocument } from 'graphql-request';

import { GraphQLClient } from 'graphql-request';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '.env.local'), encoding: 'UTF-8' });

const graphqlClient: GraphQLClient = new GraphQLClient(
  process.env.HYGRAPH_READONLY_API_URL as string,
  {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
    },
  }
);

// export const createGraphQLReq = async (
//   url: string,
//   doc: RequestDocument
// ): Promise<void | Error> => {
//   try {
//     const req = await request<any, {}>(url, doc);

//     console.log(req);
//   } catch (err: unknown) {
//     console.error(err);
//     throw Error('caught err creating gql request');
//   }
// };

export default graphqlClient;
