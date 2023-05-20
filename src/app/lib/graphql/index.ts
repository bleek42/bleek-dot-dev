import * as dotenv from 'dotenv';
import * as path from 'path';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLClient, request } from 'graphql-request';
import { GraphQLError } from 'graphql';

dotenv.config({
  path: path.join('/.env.development.local'),
  encoding: 'UTF-8',
});

console.log({
  'NODE_ENV': {
    [process.env.NODE_ENV]: {
      PORT: process.env.PORT,
      HOST: process.env.HOST,
      HYGRAPH_API_AUTH_TOKEN: process.env.HYGRAPH_API_AUTH_TOKEN,
      HYGRAPH_API_BASE_URL: process.env.HYGRAPH_API_BASE_URL,
      NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN: process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN,
      NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL: process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL,
    },
  },
});

import { graphql } from '@/lib/graphql/gen';
import {
  AllProjectsDocument,
  AllProjectsQuery,
  AllProjectsQueryVariables,
  ProjectByIdQuery,
  ProjectByIdQueryVariables,
} from '@/lib/graphql/gen/graphql';

// type Vars = AllProjectsQueryVariables | ProjectByIdQueryVariables;
async function useGraphQLRequest<TResult, Variables>(
  document: TypedDocumentNode<TResult, Variables>,
  ...[variables]: [Variables]
) {
  const client = new GraphQLClient(process.env.HYGRAPH_API_BASE_URL, {
    headers: {
      'Authorization': `Bearer ${process.env.HYGRAPH_API_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
  });
  try {
    const result = await request(
      process.env.HYGRAPH_API_BASE_URL,
      document,
      variables ?? undefined,
      {
        'Authorization': `Bearer ${process.env.HYGRAPH_API_AUTH_TOKEN}`,
      }
    );
    console.log(result);
    return result;
  } catch {
    console.error('error all projects query');
    throw new GraphQLError('error all projects query');
  }
}

const vars = {};

const queryAllProjects = () =>
  useGraphQLRequest(AllProjectsDocument, vars).then((result) => console.log(result));

queryAllProjects();

// export const queryProjectById = async () => {
//   // const query = graphql();

//   try {
//     return await new Promise((res: (val: unknown) => void) =>
//       setTimeout(() => {
//         res('resolved all projects query...');
//       }, 10000)
//     );
//   } catch {
//     console.error('error all projects query');
//     throw new GraphQLError('error all projects query');
//   }
// };
