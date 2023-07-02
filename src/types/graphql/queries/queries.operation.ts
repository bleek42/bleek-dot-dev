import * as Types from '../gen/hygraph-types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { ImageFieldsFragmentDoc } from './fragments.operation';
export type ProjectWhereUniqueQueryVariables = Types.Exact<{
  where: Types.ProjectWhereUniqueInput;
  stage?: Types.InputMaybe<Types.Stage>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type ProjectWhereUniqueQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string | number, title: string, link: string, description: string, version: number, active: boolean, sourceCode: Array<string>, techStack?: string[] | unknown | null, createdAt: Date | string, updatedAt: Date | string, stage: Types.Stage, locale: Types.Locale, screenShots: Array<{ __typename?: 'Asset', id: string | number, url: string, handle: string, fileName: string, mimeType?: string | null, width?: number | null, height?: number | null, size?: number | null, createdAt: Date | string, updatedAt: Date | string, stage: Types.Stage, locale: Types.Locale }> } | null };


export const ProjectWhereUniqueDocument = `
    query ProjectWhereUnique($where: ProjectWhereUniqueInput!, $stage: Stage, $first: Int = 10) {
  project(where: $where, stage: $stage) {
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
    screenShots(first: $first) {
      ...ImageFields
    }
  }
}
    ${ImageFieldsFragmentDoc}`;

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