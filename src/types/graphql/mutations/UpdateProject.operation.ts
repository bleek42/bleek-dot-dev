import * as Types from '../gen/hygraph-types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type UpdateProjectMutationVariables = Types.Exact<{
  data: Types.ProjectUpdateInput;
  where: Types.ProjectWhereUniqueInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject?: { __typename?: 'Project', id: string | number | symbol | unknown, title: string, description: string, link: string, active: boolean, techStack?: string[] | string | symbol | unknown | null, sourceCode: Array<string>, version: number, stage: Types.Stage, locale: Types.Locale } | null };


export const UpdateProjectDocument = gql`
    mutation UpdateProject($data: ProjectUpdateInput!, $where: ProjectWhereUniqueInput!) {
  updateProject(data: $data, where: $where) {
    id
    title
    description
    link
    active
    techStack
    sourceCode
    version
    stage
    locale
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    UpdateProject(variables: UpdateProjectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProjectMutation>(UpdateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateProject', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;