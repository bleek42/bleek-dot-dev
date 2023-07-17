import * as Types from './gen/hygraph-types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
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

export type ImageFieldsFragment = {
  __typename?: 'Asset';
  id: string | number | symbol | unknown;
  url: string;
  handle: string;
  fileName: string;
  mimeType?: string | null;
  width?: number | null;
  height?: number | null;
  size?: number | null;
  createdAt: Date | string | symbol | unknown;
  updatedAt: Date | string | symbol | unknown;
  stage: Types.Stage;
  locale: Types.Locale;
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
  stage: Types.Stage;
  locale: Types.Locale;
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
    createdAt: Date | string | symbol | unknown;
    updatedAt: Date | string | symbol | unknown;
    stage: Types.Stage;
    locale: Types.Locale;
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
export const ImageFieldsFragmentDoc = gql`
  fragment ImageFields on Asset {
    id
    url
    handle
    fileName
    mimeType
    width
    height
    size
    createdAt
    updatedAt
    stage
    locale
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
    stage
    locale
    screenShots {
      ...ImageFields
    }
  }
  ${ImageFieldsFragmentDoc}
`;

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
  return {};
}
export type Sdk = ReturnType<typeof getSdk>;
