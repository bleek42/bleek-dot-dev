import type { QueryClientConfig } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import type { RequestDocument } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';
import { request } from 'graphql-request';

// const config: QueryClientConfig = {
//   defaultOptions: {}
//   queryCache: {},
// };

export const createGraphQLClient = async (
  url: string,
  doc?: RequestDocument
): Promise<void | Error | unknown> => {
  const client: GraphQLClient = new GraphQLClient(url, {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
    },
  });

  try {
    const req = await client.request(doc);
    console.log(req);
  } catch (err: unknown) {
    console.error(err);
    if (err) throw Error(err);
    throw Error('unknown err creating gql request client');
  }
};

const client: QueryClient = new QueryClient();

export default client;
