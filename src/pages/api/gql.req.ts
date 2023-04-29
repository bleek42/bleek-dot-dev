import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import graphqlClient from '@utils/gql-client';

/** Your custom fetcher function */
export async function gqlRequest<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  // const response = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: print(document),
  //     variables,
  //   }),
  // });
  try {
    const req = await graphqlClient.request<TResult>(document, [variables]);
    console.log(req);
    if (!req) throw new Error('request err...');

    return req;
  // eslint-disable-next-line prettier/prettier
  } 
  catch {
    throw new Error('unknown err...');
  }
}
