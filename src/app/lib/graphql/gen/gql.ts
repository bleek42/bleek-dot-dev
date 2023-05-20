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
    "fragment ProjectFields on Project {\n  id\n  title\n  description\n  active\n  link\n  version\n  sourceCode\n  techStack\n  createdAt\n  updatedAt\n  locale\n}\n\nfragment ImageFields on Asset {\n  id\n  url\n  handle\n  fileName\n  mimeType\n  width\n  height\n  size\n}": types.ProjectFieldsFragmentDoc,
    "query AllProjects {\n  projects {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}\n\nquery ProjectById($id: ID!) {\n  project(where: {id: $id}) {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}": types.AllProjectsDocument,
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
export function graphql(source: "fragment ProjectFields on Project {\n  id\n  title\n  description\n  active\n  link\n  version\n  sourceCode\n  techStack\n  createdAt\n  updatedAt\n  locale\n}\n\nfragment ImageFields on Asset {\n  id\n  url\n  handle\n  fileName\n  mimeType\n  width\n  height\n  size\n}"): (typeof documents)["fragment ProjectFields on Project {\n  id\n  title\n  description\n  active\n  link\n  version\n  sourceCode\n  techStack\n  createdAt\n  updatedAt\n  locale\n}\n\nfragment ImageFields on Asset {\n  id\n  url\n  handle\n  fileName\n  mimeType\n  width\n  height\n  size\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllProjects {\n  projects {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}\n\nquery ProjectById($id: ID!) {\n  project(where: {id: $id}) {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}"): (typeof documents)["query AllProjects {\n  projects {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}\n\nquery ProjectById($id: ID!) {\n  project(where: {id: $id}) {\n    id\n    title\n    description\n    active\n    link\n    version\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;