import { QueryKey, dehydrate, useQuery, useQueryClient } from '@tanstack/react-query';

import client from '@utils/query-client';
import graphqlClient from '@utils/gql-client';
import { allProjects } from '@api/graphql/hygraph.queries.ts';
import { GraphQLError } from 'graphql';
import { DocumentType } from 'types/gen';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLClient } from 'graphql-request';

export default function useHygraphQuery<TD, VAR>(
  document: TypedDocumentNode<TD, VAR>,
  ...[variables]: VAR extends Record<string, unknown> ? [] : [VAR]
) {
  const queryClient: QueryClient = useQueryClient();

  const queryAllProjects = () =>
    graphqlClient
      .request(allProjects)
      .then((results) => {
        console.table({ results });
        return results;
      })
      .catch((err: unknown) => {
        console.error({ err });
        throw new GraphQLError((err?.toString() as string) || 'graphql error');
      });
  // queryKey: ['projects'] as QueryKey,
  // queryFn: async () => await graphqlClient.request<TD, VAR>(document, variables ?? variables),
  // initialData: async () => await client.refetchQueries(),

  return useQuery({ queryKey: ['projects'], queryFn:  });
}
