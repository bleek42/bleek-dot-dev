// import * as fs from 'fs/promises'
// import * as dotenv from 'dotenv';
// import * as path from 'path';

import { type RequestConfig } from 'graphql-request/build/esm/types';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';

import { GraphQLClient } from 'graphql-request';
import { type TypedDocumentString } from '@/graphql/gen/preset/graphql';

// import { allProjectsDoc } from '@gql/docs';

// const envPath = fs.readFile(path.join(__dirname, '.env.local'))
// dotenv.config({ path: envPath, encoding: 'UTF-8' });
// console.log('NODE_ENV:', process.env.NODE_ENV);

export async function createGraphQLClientRequest<TResult, Variables>(
  document: TypedDocumentNode<TResult> | TypedDocumentString<TResult, Variables>,
  ...[variables]: Variables extends Record<string, never> ? [] : [Variables]
) {
  console.log(document, ...[variables]);
  const graphQLOptions: RequestConfig = {
    credentials: 'include',
    cache: 'force-cache',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPHCDN_AUTH_TOKEN}`,
      'content-type': 'application/json',
    },
  };

  const graphQLClient: GraphQLClient = new GraphQLClient(
    `${process.env.NEXT_PUBLIC_HYGRAPHCDN_BASE_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
    graphQLOptions
  );

  const res = await graphQLClient.request<TResult>(document, variables ?? undefined);
  console.log(res);
  return res;
}

