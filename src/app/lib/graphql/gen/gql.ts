/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'fragment UserFields on User {\n  id\n  name\n  kind\n  isActive\n  picture\n  stage\n  createdAt\n  updatedAt\n}\n\nfragment ProjectFields on Project {\n  id\n  title\n  description\n  active\n  link\n  version\n  sourceCode\n  techStack\n  createdAt\n  updatedAt\n  locale\n}\n\nfragment ImageFields on Asset {\n  id\n  url\n  handle\n  fileName\n  mimeType\n  width\n  height\n  size\n}':
    types.UserFieldsFragmentDoc,
  'mutation CreateProject($input: ProjectCreateInput!) {\n  createProject(data: $input) {\n    ...ProjectFields\n    screenShots {\n      ...ImageFields\n    }\n  }\n}':
    types.CreateProjectDocument,
  'query AllProjects($stage: Stage = PUBLISHED, $orderBy: ProjectOrderByInput = createdAt_ASC) {\n  projects(stage: $stage, orderBy: $orderBy) {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}\n\nquery ProjectWhereUniqueId($where: ProjectWhereUniqueInput! = {id: "clhxnw5chfpxm0bk7zwvofkdw"}, $stage: Stage = PUBLISHED) {\n  project(where: $where, stage: $stage) {\n    id\n    title\n    link\n    description\n    sourceCode\n    createdAt\n    updatedAt\n    stage\n    locale\n  }\n}':
    types.AllProjectsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment UserFields on User {\n  id\n  name\n  kind\n  isActive\n  picture\n  stage\n  createdAt\n  updatedAt\n}\n\nfragment ProjectFields on Project {\n  id\n  title\n  description\n  active\n  link\n  version\n  sourceCode\n  techStack\n  createdAt\n  updatedAt\n  locale\n}\n\nfragment ImageFields on Asset {\n  id\n  url\n  handle\n  fileName\n  mimeType\n  width\n  height\n  size\n}'
): (typeof documents)['fragment UserFields on User {\n  id\n  name\n  kind\n  isActive\n  picture\n  stage\n  createdAt\n  updatedAt\n}\n\nfragment ProjectFields on Project {\n  id\n  title\n  description\n  active\n  link\n  version\n  sourceCode\n  techStack\n  createdAt\n  updatedAt\n  locale\n}\n\nfragment ImageFields on Asset {\n  id\n  url\n  handle\n  fileName\n  mimeType\n  width\n  height\n  size\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateProject($input: ProjectCreateInput!) {\n  createProject(data: $input) {\n    ...ProjectFields\n    screenShots {\n      ...ImageFields\n    }\n  }\n}'
): (typeof documents)['mutation CreateProject($input: ProjectCreateInput!) {\n  createProject(data: $input) {\n    ...ProjectFields\n    screenShots {\n      ...ImageFields\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query AllProjects($stage: Stage = PUBLISHED, $orderBy: ProjectOrderByInput = createdAt_ASC) {\n  projects(stage: $stage, orderBy: $orderBy) {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}\n\nquery ProjectWhereUniqueId($where: ProjectWhereUniqueInput! = {id: "clhxnw5chfpxm0bk7zwvofkdw"}, $stage: Stage = PUBLISHED) {\n  project(where: $where, stage: $stage) {\n    id\n    title\n    link\n    description\n    sourceCode\n    createdAt\n    updatedAt\n    stage\n    locale\n  }\n}'
): (typeof documents)['query AllProjects($stage: Stage = PUBLISHED, $orderBy: ProjectOrderByInput = createdAt_ASC) {\n  projects(stage: $stage, orderBy: $orderBy) {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}\n\nquery ProjectWhereUniqueId($where: ProjectWhereUniqueInput! = {id: "clhxnw5chfpxm0bk7zwvofkdw"}, $stage: Stage = PUBLISHED) {\n  project(where: $where, stage: $stage) {\n    id\n    title\n    link\n    description\n    sourceCode\n    createdAt\n    updatedAt\n    stage\n    locale\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
