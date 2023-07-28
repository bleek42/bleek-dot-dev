import type * as Types from './hygraph-types.js';

import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types.js';
import gql from 'graphql-tag';
export type UserFieldsFragment = {
  __typename?: 'User';
  id: string | number | symbol | unknown;
  name: string;
  kind: Types.UserKind;
  isActive: boolean;
  picture?: string | null;
  createdAt: Date | string | symbol | unknown;
  updatedAt: Date | string | symbol | unknown;
  stage: Types.Stage;
};

export type AssetFieldsFragment = {
  __typename?: 'Asset';
  id: string | number | symbol | unknown;
  url: string;
  handle: string;
  fileName: string;
  mimeType?: string | null;
  width?: number | null;
  height?: number | null;
  size?: number | null;
  locale: Types.Locale;
  createdAt: Date | string | symbol | unknown;
  updatedAt: Date | string | symbol | unknown;
  stage: Types.Stage;
};

export type ProjectFieldsFragment = {
  __typename?: 'Project';
  id: string | number | symbol | unknown;
  title: string;
  description: string;
  active: boolean;
  link: string;
  techStack?: string[] | string | symbol | unknown | null;
  sourceCode: Array<string>;
  version: number;
  locale: Types.Locale;
  createdAt: Date | string | symbol | unknown;
  updatedAt: Date | string | symbol | unknown;
  stage: Types.Stage;
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
    locale: Types.Locale;
    createdAt: Date | string | symbol | unknown;
    updatedAt: Date | string | symbol | unknown;
    stage: Types.Stage;
  }>;
};

export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    id
    name
    kind
    isActive
    picture
    createdAt
    updatedAt
    stage
  }
`;
export const AssetFieldsFragmentDoc = gql`
  fragment AssetFields on Asset {
    id
    url
    handle
    fileName
    mimeType
    width
    height
    size
    url
    locale
    createdAt
    updatedAt
    stage
  }
`;
export const ProjectFieldsFragmentDoc = gql`
  fragment ProjectFields on Project {
    id
    title
    description
    active
    link
    techStack
    sourceCode
    version
    locale
    createdAt
    updatedAt
    stage
    screenShots(first: 4, forceParentLocale: true) {
      ...AssetFields
    }
  }
  ${AssetFieldsFragmentDoc}
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
  return {};
}
export type Sdk = ReturnType<typeof getSdk>;
