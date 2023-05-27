// import * as dotenv from 'dotenv';
// import * as path from 'path';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLClient, RequestDocument, gql } from 'graphql-request';
import { ExecutionResult, GraphQLError } from 'graphql';

// dotenv.config({
//   path: path.join('/.env.development.local'),
//   encoding: 'UTF-8',
// });

// console.log({
//   'NODE_ENV': {
//     [process.env.NODE_ENV]: {
//       PORT: process.env.PORT,
//       HOST: process.env.HOST,
//       HYGRAPH_API_AUTH_TOKEN: process.env.HYGRAPH_API_AUTH_TOKEN,
//       HYGRAPH_API_BASE_URL: process.env.HYGRAPH_API_BASE_URL,
//       NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN: process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN,
//       NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL: process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL,
//     },
//   },
// });

import { graphql } from './gen/gql';
// import { AllProjectsDocument, TypedDocumentString } from '@/lib/graphql/gen/graphql';
import { AllProjectsDocument, AllProjectsQuery, AllProjectsQueryVariables } from './gen/graphql';

// type Vars = AllProjectsQueryVariables | ProjectByIdQueryVariables;
async function useGraphQLRequest<TResult, Variables>(
  document: TypedDocumentNode<TResult, Variables> | RequestDocument,
  ...[variables]: Variables extends Record<string, never> ? [] : [Variables]
): Promise<TResult> {
  const client = new GraphQLClient(
    'https://us-east-1.cdn.hygraph.com/content/cl2jezykc0li901yx24p50f8f/master',
    {
      headers: {
        'Authorization': `Bearer`,
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    }
  );
  const result = await client.request<Awaited<TResult>>(document, variables ?? []);
  console.log(result);
  return result;
}

const projects = graphql(`
  query AllProjects(
    $stage: Stage = PUBLISHED
    $orderBy: ProjectOrderByInput = createdAt_ASC
  ) {
    projects(stage: $stage, orderBy: $orderBy) {
      id
      title
      description
      active
      link
      version
      sourceCode
      techStack
      createdAt
      updatedAt
      stage
      locale
      screenShots {
        id
        url
        handle
        fileName
        mimeType
        width
        height
        size
        createdAt
        updatedAt
        stage
        locale
      }
    }
  }
`) as TypedDocumentNode<typeof AllProjectsDocument, AllProjectsQueryVariables>;

export const allDraftProjectQuery = useGraphQLRequest(projects, {
  'stage': 'DRAFT',
  'orderBy': 'createdAt_ASC',
})
  .then((result) => result)
  .catch((err) => console.error(err));

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
