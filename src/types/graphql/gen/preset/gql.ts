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
    "mutation CreateProject($input: ProjectCreateInput!) {\n  createProject(data: $input) {\n    ...ProjectFields\n    screenShots {\n      ...ImageFields\n    }\n  }\n}": types.CreateProjectDocument,
    "fragment UserFields on User {\n  id\n  name\n  kind\n  isActive\n  picture\n  createdAt\n  updatedAt\n  stage\n}\n\nfragment ImageFields on Asset {\n  id\n  url\n  handle\n  fileName\n  mimeType\n  width\n  height\n  size\n  createdAt\n  updatedAt\n  stage\n  locale\n}\n\nfragment ProjectFields on Project {\n  id\n  title\n  description\n  active\n  link\n  version\n  sourceCode\n  techStack\n  screenShots {\n    ...ImageFields\n  }\n  createdAt\n  updatedAt\n  stage\n  locale\n}": types.UserFieldsFragmentDoc,
    "query ProjectWhereUnique($where: ProjectWhereUniqueInput!, $stage: Stage, $first: Int = 10) {\n  project(where: $where, stage: $stage) {\n    id\n    title\n    link\n    description\n    version\n    active\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots(first: $first) {\n      ...ImageFields\n    }\n  }\n}": types.ProjectWhereUniqueDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateProject($input: ProjectCreateInput!) {\n  createProject(data: $input) {\n    ...ProjectFields\n    screenShots {\n      ...ImageFields\n    }\n  }\n}"): typeof import('./graphql').CreateProjectDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserFields on User {\n  id\n  name\n  kind\n  isActive\n  picture\n  createdAt\n  updatedAt\n  stage\n}\n\nfragment ImageFields on Asset {\n  id\n  url\n  handle\n  fileName\n  mimeType\n  width\n  height\n  size\n  createdAt\n  updatedAt\n  stage\n  locale\n}\n\nfragment ProjectFields on Project {\n  id\n  title\n  description\n  active\n  link\n  version\n  sourceCode\n  techStack\n  screenShots {\n    ...ImageFields\n  }\n  createdAt\n  updatedAt\n  stage\n  locale\n}"): typeof import('./graphql').UserFieldsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProjectWhereUnique($where: ProjectWhereUniqueInput!, $stage: Stage, $first: Int = 10) {\n  project(where: $where, stage: $stage) {\n    id\n    title\n    link\n    description\n    version\n    active\n    sourceCode\n    techStack\n    createdAt\n    updatedAt\n    stage\n    locale\n    screenShots(first: $first) {\n      ...ImageFields\n    }\n  }\n}"): typeof import('./graphql').ProjectWhereUniqueDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
