import * as Types from '../gen/ops/hygraph-types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
export type AllProjectsQueryVariables = Types.Exact<{
  stage?: Types.InputMaybe<Types.Stage>;
  orderBy?: Types.InputMaybe<Types.ProjectOrderByInput>;
}>;

export type AllProjectsQuery = {
  __typename?: 'Query';
  projects: Array<{
    __typename?: 'Project';
    id: string | number;
    title: string;
    link: string;
    description: string;
    version: number;
    active: boolean;
    sourceCode: Array<string>;
    techStack?: string[] | unknown | null;
    createdAt: Date | string;
    updatedAt: Date | string;
    stage: Types.Stage;
    locale: Types.Locale;
    screenShots: Array<{
      __typename?: 'Asset';
      id: string | number;
      url: string;
      handle: string;
      fileName: string;
      mimeType?: string | null;
      width?: number | null;
      height?: number | null;
      size?: number | null;
      createdAt: Date | string;
      updatedAt: Date | string;
      stage: Types.Stage;
      locale: Types.Locale;
    }>;
  }>;
};

export const AllProjectsDocument = `
    query AllProjects($stage: Stage = PUBLISHED, $orderBy: ProjectOrderByInput = createdAt_ASC) {
  projects(stage: $stage, orderBy: $orderBy) {
    id
    title
    link
    description
    version
    active
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
    `;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) =>
  action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    AllProjects(
      variables?: AllProjectsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<AllProjectsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AllProjectsQuery>(AllProjectsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AllProjects',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
