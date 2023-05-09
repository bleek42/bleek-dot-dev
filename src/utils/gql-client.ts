// import * as fs from 'fs/promises'
// import * as dotenv from 'dotenv';
// import * as path from 'path';
// console.log('NODE_ENV:', process.env.NODE_ENV);

// const envPath = fs.readFile(path.join(__dirname, '.env.local'))
// dotenv.config({ path: envPath, encoding: 'UTF-8' });

import { GraphQLClient, type RequestDocument } from 'graphql-request';

const graphqlClient: GraphQLClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
  {
    credentials: 'include',
    cache: 'force-cache',
    mode: 'cors',
  }
);

export default graphqlClient;
