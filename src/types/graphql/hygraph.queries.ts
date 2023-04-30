import { gql } from 'graphql-request';

export const AllProjects = gql`
  query AllProjects {
    projects {
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
`;

export const ProjectById = gql`
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
`;

export const CreateProject = gql`
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
`;

// export const UpdateProject = gql`
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
// `;

// export const DeleteProject = gql`
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
// `;
