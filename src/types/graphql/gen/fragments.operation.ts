import * as Types from './preset/hygraph-types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
export type UserFieldsFragment = {
  __typename?: 'User';
  id: string | number;
  name: string;
  kind: Types.UserKind;
  isActive: boolean;
  picture?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  stage: Types.Stage;
};

export type ImageFieldsFragment = {
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
};

export type ProjectFieldsFragment = {
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
};

export const UserFieldsFragmentDoc = `
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
export const ImageFieldsFragmentDoc = `
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
export const ProjectFieldsFragmentDoc = `
    fragment ProjectFields on Project {
  id
  title
  description
  active
  link
  version
  sourceCode
  techStack
  screenShots {
    ...ImageFields
  }
  createdAt
  updatedAt
  stage
  locale
}
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
  return {};
}
export type Sdk = ReturnType<typeof getSdk>;
