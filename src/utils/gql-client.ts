import type { RequestDocument } from 'graphql-request';

import { GraphQLClient } from 'graphql-request';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '.env.local'), encoding: 'UTF-8' });

const graphqlClient: GraphQLClient = new GraphQLClient(
  `${process.env.HYGRAPH_READONLY_API_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
  {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_KEY}`,
    },
  }
);

export default graphqlClient;
