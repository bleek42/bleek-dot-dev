import * as Types from '../hygraph-types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
export type AssetWhereUniqueQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.AssetWhereUniqueInput>;
  transformation?: Types.InputMaybe<Types.AssetTransformationInput>;
}>;

export type AssetWhereUniqueQuery = {
  __typename?: 'Query';
  asset?: {
    __typename?: 'Asset';
    id: string;
    fileName: string;
    handle: string;
    mimeType?: string | null;
    width?: number | null;
    height?: number | null;
    size?: number | null;
    url: string;
    locale: Types.Locale;
    createdAt: any;
    updatedAt: any;
    stage: Types.Stage;
  } | null;
};

export const AssetWhereUniqueDocument = `
    query AssetWhereUnique($where: AssetWhereUniqueInput = {id: "clkmvsfr98zs50bin0ko9jr8m"}, $transformation: AssetTransformationInput = {image: {resize: {fit: scale}}}) {
  asset(where: $where) {
    id
    fileName
    handle
    mimeType
    width
    height
    size
    url(transformation: $transformation)
    locale
    createdAt
    updatedAt
    stage
  }
}
    `;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) =>
  action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    AssetWhereUnique(
      variables?: AssetWhereUniqueQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<AssetWhereUniqueQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AssetWhereUniqueQuery>(AssetWhereUniqueDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'AssetWhereUnique',
        'query',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
