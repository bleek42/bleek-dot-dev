import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import gqlClient from './gql-client.ts';

export async function gqlFetcher<TResult, TVariables>(
  url: string,
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  const response = await gqlClient.request<TResult, TVariables>(
    document,
    variables ? [...variables] : []
  );
  if (!response) {
    throw new Error(`Failed to fetch...`);
  }

  return await response;
}
