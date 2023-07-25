import type * as Types from './hygraph-types';

import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type ProjectWhereUniqueQueryVariables = Types.Exact<{
  where: Types.ProjectWhereUniqueInput;
  stage?: Types.InputMaybe<Types.Stage>;
  locales?: Types.InputMaybe<Array<Types.Locale> | Types.Locale>;
}>;


export type ProjectWhereUniqueQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string | number | symbol | unknown, title: string, active: boolean, description: string, link: string, techStack?: string[] | string | symbol | unknown | null, sourceCode: Array<string>, version: number, stage: Types.Stage, locale: Types.Locale, screenShots: Array<{ __typename?: 'Asset', id: string | number | symbol | unknown, url: string, handle: string, fileName: string, mimeType?: string | null, width?: number | null, height?: number | null, size?: number | null, stage: Types.Stage, locale: Types.Locale }> } | null };


export const ProjectWhereUniqueDocument = gql`
    query ProjectWhereUnique($where: ProjectWhereUniqueInput!, $stage: Stage = PUBLISHED, $locales: [Locale!] = [en]) {
  project(where: $where, stage: $stage, locales: $locales) {
    id
    title
    active
    description
    link
    techStack
    sourceCode
    version
    stage
    locale
    screenShots(first: 10, forceParentLocale: true) {
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ProjectWhereUnique(variables: ProjectWhereUniqueQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProjectWhereUniqueQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectWhereUniqueQuery>(ProjectWhereUniqueDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProjectWhereUnique', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;