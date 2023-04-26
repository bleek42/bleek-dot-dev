import { gql } from 'graphql-request';

export const AllProjects = gql`
  query AllProjects {
    allProjects {
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
    projectById(id: $id) {
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
  mutation CreateProject($input: ProjectInput!) {
    createProject(input: $input) {
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

export const UpdateProject = gql`
  mutation UpdateProject($input: ProjectInput!) {
    updateProject(input: $input) {
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

export const DeleteProject = gql`
  mutation DeleteProject($input: ProjectInput!) {
    deleteProject(input: $input) {
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
