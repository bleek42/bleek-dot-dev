import {
  type ResultOf,
  type VariablesOf,
  type TypedDocumentNode,
} from '@graphql-typed-document-node/core';
import { GraphQLClient, RequestDocument, gql } from 'graphql-request';
import { DocumentNode, ExecutionArgs, ExecutionResult, GraphQLError } from 'graphql';

import { GraphQLResponse, Variables } from 'graphql-request/build/esm/types';
// import {  } from '@graphql-typed-document-node/core';
// import { ExecutionResult } from 'graphql';
import { graphql } from './gen/gql';
import { TypedDocumentString } from './gen/graphql';

import {
  Project,
  ProjectWhereUniqueDocument,
  ProjectWhereUniqueQuery,
  ProjectWhereUniqueInput,
  ProjectWhereUniqueQueryVariables,
} from './gen/graphql';

export const useGraphQLRequest = async <TResult = unknown, Variables = ExecutionArgs>(
  document: TypedDocumentString<TResult, Variables>,
  ...[variables]: Variables extends Record<string, unknown> ? [Variables] : []
) => {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  try {
    const response = await client.request<TResult>(document.toString(), variables);
    console.log(response);
    return response;
  } catch {
    throw new GraphQLError('GraphQL Query/Mutation Error!');
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
