import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { Variables } from 'graphql-request';
import { request } from 'graphql-request';
import { VariablesAndRequestHeaders } from 'graphql-request/dist/types.js';

// import gqlClient from '@utils/gql-client.ts';

export default function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    [(document.definitions[0] as unknown).name.value, variables],
    async ({ queryKey }) =>
      await request<TResult, VariablesAndRequestHeaders<TVariables>>(
        process.env.HYGRAPH_READONLY_API_URL,
        document,
        queryKey[1] ? queryKey[1] : undefined
      )
  );
}
