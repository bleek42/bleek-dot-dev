import * as Types from '../typeDefs/hygraph.js';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types.js';
import gql from 'graphql-tag';
export type UserFieldsFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  kind: Types.UserKind;
  isActive: boolean;
  picture?: string | null;
  createdAt: any;
  updatedAt: any;
  stage: Types.Stage;
};

export type AssetFieldsFragment = {
  __typename?: 'Asset';
  id: string;
  url: string;
  handle: string;
  fileName: string;
  mimeType?: string | null;
  width?: number | null;
  height?: number | null;
  size?: number | null;
  locale: Types.Locale;
  createdAt: any;
  updatedAt: any;
  stage: Types.Stage;
};

export type ProjectFieldsFragment = {
  __typename?: 'Project';
  id: string;
  title: string;
  description: string;
  active: boolean;
  link: string;
  techStack?: any | null;
  sourceCode: Array<string>;
  version: number;
  locale: Types.Locale;
  createdAt: any;
  updatedAt: any;
  stage: Types.Stage;
  screenShots: Array<{
    __typename?: 'Asset';
    id: string;
    url: string;
    handle: string;
    fileName: string;
    mimeType?: string | null;
    width?: number | null;
    height?: number | null;
    size?: number | null;
    locale: Types.Locale;
    createdAt: any;
    updatedAt: any;
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
2;

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
