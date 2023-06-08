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

export async function createGraphQLClientRequest<TResult, Variables>(
  document: TypedDocumentNode<TResult>,
  ...[variables]: Variables extends Record<string, never> ? [] : [Variables]
) {
  console.log(document, ...[variables]);
  const graphQLOptions: PatchedRequestInit = {
    credentials: 'include',
    cache: 'only-if-cached',
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

  try {
    const res = await graphQLClient.request<TResult, Variables>(document, variables);
    console.log(res);
    return res;
  } catch {
    throw new GraphQLError('GQL ERR: graphQL request failed!');
  }
}

