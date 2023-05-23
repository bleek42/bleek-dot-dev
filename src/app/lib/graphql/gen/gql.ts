/* eslint-disable */
import * as types from './graphql';

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
  [`query ProjectWhereUnique(
    $where: ProjectWhereUniqueInput!
    $stage: Stage = PUBLISHED
  ) {
    project(where: $where, stage: $stage) {
      id
      title
      link
      description
      version
      active
      sourceCode
      techStack
      createdAt
      updatedAt
      stage
      locale
      screenShots {
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
    }
  }`]: types.ProjectWhereUniqueDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query ProjectWhereUnique($where: ProjectWhereUniqueInput!, $stage: Stage = PUBLISHED) {\n  project(where: $where, stage: $stage) {\n    id\n    title\n    link\n    description\n    version\n    active\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots {\n      id\n      url\n      handle\n      fileName\n      mimeType\n      width\n      height\n      size\n      createdAt\n      updatedAt\n      stage\n      locale\n    }\n  }\n}'
): typeof import('./graphql').ProjectWhereUniqueDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
