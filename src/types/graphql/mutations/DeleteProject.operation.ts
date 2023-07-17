import * as Types from '../gen/hygraph-types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type DeleteProjectMutationVariables = Types.Exact<{
  where: Types.ProjectWhereUniqueInput;
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject?: { __typename?: 'Project', id: string | number | symbol | unknown, title: string, active: boolean, link: string, description: string, techStack?: string[] | string | symbol | unknown | null, sourceCode: Array<string>, version: number, createdAt: Date | string | symbol | unknown, updatedAt: Date | string | symbol | unknown, stage: Types.Stage, locale: Types.Locale } | null };


export const DeleteProjectDocument = gql`
    mutation DeleteProject($where: ProjectWhereUniqueInput!) {
  deleteProject(where: $where) {
    id
    title
    active
    link
    description
    techStack
    sourceCode
    version
    createdAt
    updatedAt
    stage
    locale
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    DeleteProject(variables: DeleteProjectMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProjectMutation>(DeleteProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteProject', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;