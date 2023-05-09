import type { QueryClient } from '@tanstack/react-query';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import { QueryKey, dehydrate, useQuery, useQueryClient } from '@tanstack/react-query';
import { GraphQLError } from 'graphql';

import { allProjectsDoc } from '@gql/docs';
import graphqlClient from '@utils/gql-client';

export default function hygraphQuery<TDoc, TVars>(
  document: TypedDocumentNode<TDoc>,
  ...[variables]: TVars extends Record<unknown, unknown> ? TVars : [TVars]
) {
  console.log(document);
  return graphqlClient
    .request<TDoc>(document, ...[variables])
    .then((results) => {
      console.table({ results });
      return results;
    })
    .catch((err: unknown) => {
      console.error({ err });
      throw new GraphQLError(err?.toString() || 'graphql error');
    });
  // queryKey: ['projects'] as QueryKey,
  // queryFn: async () => await graphqlClient.request<TD, VAR>(document, variables ?? variables),
  // initialData: async () => await client.refetchQueries(),
}
