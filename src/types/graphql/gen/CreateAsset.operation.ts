import type * as Types from './hygraph-types';

import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type CreateAssetMutationVariables = Types.Exact<{
  data: Types.AssetCreateInput;
}>;


export type CreateAssetMutation = { __typename?: 'Mutation', createAsset?: { __typename?: 'Asset', fileName: string, handle: string, mimeType?: string | null, width?: number | null, height?: number | null, size?: number | null, url: string, locale: Types.Locale, createdAt: Date | string | symbol | unknown, updatedAt: Date | string | symbol | unknown, stage: Types.Stage } | null };


export const CreateAssetDocument = gql`
    mutation CreateAsset($data: AssetCreateInput!) {
  createAsset(data: $data) {
    fileName
    handle
    mimeType
    width
    height
    size
    url(transformation: {image: {resize: {fit: scale}}})
    locale
    createdAt
    updatedAt
    stage
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateAsset(variables: CreateAssetMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateAssetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAssetMutation>(CreateAssetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateAsset', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;