import { gql } from 'graphql-request';

export const allProjects = gql`
  query AllProjectsQuery {
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
