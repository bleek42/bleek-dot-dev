import {
  type DocumentNode,
  type ExecutionArgs,
  type ExecutionResult,
  GraphQLError,
} from 'graphql';
import {
  type ResultOf,
  type VariablesOf,
  type TypedDocumentNode,
} from '@graphql-typed-document-node/core';
import { GraphQLClient, type RequestDocument, type Variables } from 'graphql-request';

import { type Mutation, type Query, type TypedDocumentString } from './gen/graphql';
import { graphql } from './gen/gql';

// type Vars = AllProjectsQueryVariables | ProjectByIdQueryVariables;

export const useGraphQLClient = async <
  TResult extends ExecutionResult<Query | Mutation>,
  TVariables = Variables,
>(
  document:
    | TypedDocumentString<TResult, TVariables>
    | TypedDocumentNode<TResult, TVariables>
    | DocumentNode,
  ...[variables]: TVariables extends Record<string | number | symbol, unknown>
    ? [TVariables]
    : []
): Promise<TResult> => {
  let err: GraphQLError | null = null;
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  try {
    const response = await client.request<TResult>(
      document.toString(),
      variables ?? undefined,
    );

    console.table({ response });
    if (!response) {
      console.error('Error: useGraphQLClient bad request/response..!');
      err = new GraphQLError('Error: useGraphQLClient bad request/response..!');
      throw err;
    }
    console.log(response.data);
    return response;
  } catch {
    console.error('Error: useGraphQLClient uncaught exception..!');
    err = new GraphQLError('Error: useGraphQLClient bad request/response..!');
    throw err;
  }
};

/*
    !  GRAPHQL !
  */
// * eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-expect-error

/*
  {
    'where': { 'id': string | 'clhxnw5chfpxm0bk7zwvofkdw' };
  }
*/

// type ProjectWhereIdArgs = Pick<ProjectWhereUniqueInput, 'id'>;
