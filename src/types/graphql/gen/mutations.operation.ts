import * as Types from './preset/hygraph-types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { ProjectFieldsFragmentDoc, ImageFieldsFragmentDoc } from './fragments.operation';
export type CreateProjectMutationVariables = Types.Exact<{
  input: Types.ProjectCreateInput;
}>;

export type CreateProjectMutation = {
  __typename?: 'Mutation';
  createProject?: {
    __typename?: 'Project';
    id: string | number;
    title: string;
    description: string;
    active: boolean;
    link: string;
    version: number;
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
  } | null;
};

export const CreateProjectDocument = `
    mutation CreateProject($input: ProjectCreateInput!) {
  createProject(data: $input) {
    ...ProjectFields
    screenShots {
      ...ImageFields
    }
  }
}
    ${ProjectFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;

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
    CreateProject(
      variables: CreateProjectMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CreateProjectMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateProjectMutation>(CreateProjectDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CreateProject',
        'mutation'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
