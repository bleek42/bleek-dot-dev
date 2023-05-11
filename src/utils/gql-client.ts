// import * as fs from 'fs/promises'
// import * as dotenv from 'dotenv';
// import * as path from 'path';
import type { QueryClient } from '@tanstack/react-query';
import type { PatchedRequestInit } from 'graphql-request/dist/types';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import { GraphQLClient } from 'graphql-request';
import { GraphQLError } from 'graphql';

// import { allProjectsDoc } from '@gql/docs';

// const envPath = fs.readFile(path.join(__dirname, '.env.local'))
// dotenv.config({ path: envPath, encoding: 'UTF-8' });
// console.log('NODE_ENV:', process.env.NODE_ENV);

export async function hygraphClient<TDoc, TVars>(
  document: TypedDocumentNode<TDoc>,
  ...[variables]: TVars extends Record<string | number | symbol, unknown>
    ? Record<string | number | symbol, unknown>
    : [TVars]
) {
  console.log(document, ...[variables]);
  const hygraphOptions: PatchedRequestInit = {
    credentials: 'include',
    cache: 'only-if-cached',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN}`,
      'content-type': 'application/json',
    },
  };

  const hygraphClient: GraphQLClient = new GraphQLClient(
    `${process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
    hygraphOptions
  );

  try {
    const res = await hygraphClient.request<TDoc>(document, variables);
    console.log(res);
    return res;
  } catch {
    throw new GraphQLError('GQL ERR: Hygraph request failed!');
  }
}

