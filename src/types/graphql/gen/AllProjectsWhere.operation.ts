import type * as Types from './hygraph-types';

import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type AllProjectsWhereQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProjectWhereInput>;
  stage?: Types.InputMaybe<Types.Stage>;
  orderBy?: Types.InputMaybe<Types.ProjectOrderByInput>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  locales?: Types.InputMaybe<Array<Types.Locale> | Types.Locale>;
}>;


export type AllProjectsWhereQuery = {
  __typename?: 'Query';
  projects: Array<{
    __typename?: 'Project';
    id: string | number | symbol | unknown;
    title: string;
    active: boolean;
    link: string;
    description: string;
    version: number;
    sourceCode: Array<string>;
    techStack?: string[] | string | symbol | unknown | null;
    stage: Types.Stage;
    locale: Types.Locale;
    screenShots: Array<{
      __typename?: 'Asset';
      id: string | number | symbol | unknown;
      url: string;
      handle: string;
      fileName: string;
      mimeType?: string | null;
      width?: number | null;
      height?: number | null;
      size?: number | null;
      stage: Types.Stage;
      locale: Types.Locale;
    }>;
  }>;
};


export const AllProjectsWhereDocument = gql`
  query AllProjectsWhere(
    $where: ProjectWhereInput
    $stage: Stage = PUBLISHED
    $orderBy: ProjectOrderByInput = active_ASC
    $first: Int = 20
    $locales: [Locale!] = [en]
  ) {
    projects(
      where: $where
      stage: $stage
      orderBy: $orderBy
      first: $first
      locales: $locales
    ) {
      id
      title
      active
      link
      description
      version
      sourceCode
      techStack
      stage
      locale
      screenShots(first: $first, forceParentLocale: true) {
        id
        url
        handle
        fileName
        mimeType
        width
        height
        size
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
    AllProjectsWhere(
      variables?: AllProjectsWhereQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<AllProjectsWhereQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AllProjectsWhereQuery>(AllProjectsWhereDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AllProjectsWhere',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
