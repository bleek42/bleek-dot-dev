import {
  type ResultOf,
  type VariablesOf,
  type TypedDocumentNode,
} from '@graphql-typed-document-node/core';
import { GraphQLClient, RequestDocument, gql } from 'graphql-request';
import { DocumentNode, ExecutionArgs, ExecutionResult, GraphQLError } from 'graphql';

// import { type Variables } from 'graphql-request';
// import {  } from '@graphql-typed-document-node/core';
// import { ExecutionResult } from 'graphql';
import { graphql } from './gen/gql';
import { type Mutation, type Query, type TypedDocumentString } from './gen/graphql';
import { RemoveIndex } from 'graphql-request/dist/types';

// type Vars = AllProjectsQueryVariables | ProjectByIdQueryVariables;

export const useGraphQLClient = async <
  TResult = ResultOf<Query | Mutation>,
  Variables = Record<string | number | symbol, unknown>
>(
  document:
    | TypedDocumentString<TResult, Variables>
    | TypedDocumentNode<TResult, Variables>
    | DocumentNode,
  ...[variables]: Variables extends Record<string | number | symbol, unknown>
    ? [Variables]
    : []
) => {
  let err: GraphQLError;
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  try {
    const response = await client.rawRequest<TResult, Variables>(
      document.toString(),
      variables ?? []
    );

    console.table({ response });
    if (!response) {
      console.error('Error: useGraphQLClient bad request/response..!');
      err = new GraphQLError('Error: useGraphQLClient bad request/response..!');
      throw err;
    }
    console.log(response);
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
