import type * as Types from './hygraph-types';

import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type CreateProjectMutationVariables = Types.Exact<{
  input: Types.ProjectCreateInput;
  stage?: Types.InputMaybe<Types.Stage>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'Project', id: string | number | symbol | unknown, title: string, active: boolean, description: string, link: string, sourceCode: Array<string>, techStack?: string[] | string | symbol | unknown | null, version: number, stage: Types.Stage, locale: Types.Locale, screenShots: Array<{ __typename?: 'Asset', id: string | number | symbol | unknown, url: string, handle: string, fileName: string, mimeType?: string | null, width?: number | null, height?: number | null, size?: number | null, stage: Types.Stage, locale: Types.Locale }> } | null };


export const CreateProjectDocument = gql`
    mutation CreateProject($input: ProjectCreateInput!, $stage: Stage = PUBLISHED, $first: Int = 10) {
  createProject(data: $input) {
    id
    title
    active
    description
    link
    active
    sourceCode
    techStack
    version
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateProject(variables: CreateProjectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProjectMutation>(CreateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateProject', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;