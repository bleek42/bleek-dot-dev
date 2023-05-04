import type { QueryClient } from '@tanstack/react-query';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import { QueryKey, dehydrate, useQuery, useQueryClient } from '@tanstack/react-query';
import { GraphQLError } from 'graphql';

import graphqlClient from '@utils/gql-client';

export default function useHygraphQuery<TD, VAR>(
  document: TypedDocumentNode<TD, VAR>,
  ...[variables]: VAR extends Record<string, unknown> ? [] : [VAR]
) {
  const queryClient: QueryClient = useQueryClient();

  const queryAllProjects = () =>
    graphqlClient
      .request<TD>(document)
      .then((results) => {
        console.table({ results });
        return results;
      })
      .catch((err: unknown) => {
        console.error({ err });
        throw new GraphQLError((err?.toString()) || 'graphql error');
      });
  // queryKey: ['projects'] as QueryKey,
  // queryFn: async () => await graphqlClient.request<TD, VAR>(document, variables ?? variables),
  // initialData: async () => await client.refetchQueries(),

  const projects = useQuery<TD, GraphQLError, TD, readonly ['projects']>({ queryKey: ['projects'], queryFn: async () => await queryAllProjects()  });
  console.log('RESULT:', { projects })
  return projects ?? projects
}
