import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { graphql } from '../../../types/gen/gql';
import { AllProjectsDocument, AllProjectsQuery } from 'types/gen/graphql';

export const allProjects: TypedDocumentNode<AllProjectsQuery, never> = graphql(AllProjectsDocument);

export const projectById = graphql(`
  query ProjectById($id: ID!) {
    project(where: { id: $id }) {
      title
      description
      active
      id
      link
      sourceCode
      techStack
      version
      createdAt
      updatedAt
      screenShots {
        fileName
        id
        mimeType
        url
      }
    }
  }
`);

export const createProject = graphql(`
  mutation CreateProject($data: ProjectCreateInput!) {
    createProject(data: $data) {
      title
      description
      active
      id
      link
      sourceCode
      techStack
      version
      createdAt
      updatedAt
      screenShots {
        fileName
        id
        mimeType
        url
      }
    }
  }
`);

// export const updateProject = graphql(`
//   mutation UpdateProject($where: ProjectWhereUniqueInput!) {
//     updateProject(where: $where) {
//       title
//       description
//       active
//       id
//       link
//       sourceCode
//       techStack
//       version
//       createdAt
//       updatedAt
//       screenShots {
//         fileName
//         id
//         mimeType
//         url
//       }
//     }
//   }
// `);

// export const deleteProject = graphql(`
//   mutation DeleteProject($data: ProjectWhereInput!) {
//     deleteProject(data: $data) {
//       title
//       description
//       active
//       id
//       link
//       sourceCode
//       techStack
//       version
//       createdAt
//       updatedAt
//       screenShots {
//         fileName
//         id
//         mimeType
//         url
//       }
//     }
//   }
// `);
