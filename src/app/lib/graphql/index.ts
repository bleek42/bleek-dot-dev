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
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODE4NTIyNTcsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2wyamV6eWtjMGxpOTAxeXgyNHA1MGY4Zi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDY3YjJjY2QtMTM0Ny00ZTUzLWI2NTItZjE4NTRkNmJhZDZiIiwianRpIjoiY2xnbXJlcmJ5NWF2dDAxdDVid24zMWYzcCJ9.BXtgOil3iLiGr70rub_l19sMdaE1UCnYKQ0GKbFN7k6JntLOyv01yvdrt1QxdS-WVcmfd7rWeIdGljmRsXadOYXz4YDEudRZKFpKKc9p-K2zPry9J_57inUDSMDefVxSezTzNMP1UjHYxvMr3Ep8ZXoyzGVdGyZsHw7o3D79WWzuFTedjOHGHBXlAH9XAfOsAICpOXU12lSvE0BxPqeafGIS9fOEe9coVkB-yw3M0fHhOY9tPW4VCvk4y_vu8XIM4U7n3VZ2slv2_5X0XrHZKc9NbpEWZm7x-3T7t5TVyvE2uxemWqMOXSu76ht_rc1BjL6VC2_s0tlC6vO429IeC8rDwQ1K2MJ8yV1qU03UiCmJUhafYYJLyz3wKLdDeSpdvB6RLX3FYDG3_okzrmDUswT965vJ2BQ3-VNbKsuQVsdDs9cvP3cdXau5gK-hB3J13fCAdbIGG_27GGtXIa8g8mqxAWW0PsGGJFzS5bowIWPYUWAEsqq34aSbb7I5hZHW5-pBIocTIZXXBIkSHOeZ8xCWfjN5NChJ5leG6leDGi87xkFOmBMrlblSWJxx-l2wNfmoJLsUZYRbDX1tSUZSu4B7U8dPbXwYdsDZngGX-wbrOf9feeMLmZ_zVMZapHtRzKy4bbvt_gkndP4D0LO7H7CTAK87se-1ObkvBGMLi6g`,
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
