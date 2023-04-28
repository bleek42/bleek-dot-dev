import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { print, type ExecutionResult } from 'graphql';

import graphqlClient from '@utils/gql-client';

/** Your custom fetcher function */
async function gqlRequest<TResult, TVariables>(
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
  const req = await graphqlClient.request<TResult>(document, [variables]);
  console.log(req);
  if (!req) throw new Error('gql req err...');
  return req;
}

export function useGraphQLReq<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<ExecutionResult<TResult>> | void {
  console.log(document, variables);
  gqlRequest(document);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  // return useQuery([(document?.definitions[0] as unknown)?.name?.value, variables], () =>
  //   gqlClientRequest(document, variables)
  // );
}
