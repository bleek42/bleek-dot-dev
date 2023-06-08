import { gql } from 'graphql-tag';

export const CreateProject = gql`
  mutation CreateProject($data: ProjectInput!) {
    createProject(data: $data) {
      ...ProjectFields

      screenShots {
        ...ImageFields
      }
    }
  }
`;

export const UpdateProject = gql`
  mutation UpdateProject($data: ProjectInput!) {
    updateProject(where: $data) {
      ...ProjectFields

      screenShots {
        ...ImageFields
      }
    }
  }
`;

export const DeleteProject = gql`
  mutation DeleteProject($data: ProjectInput!) {
    deleteProject(where: $data) {
      ...ProjectFields

      screenShots {
        ...ImageFields
      }
    }
  }
`;
