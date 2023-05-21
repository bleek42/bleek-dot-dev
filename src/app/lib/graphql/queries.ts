import { gql } from 'graphql-tag';

export const AllProjects = gql`
  query AllProjects {
    projects {
      id
      title
      description
      active
      link
      version
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
  }
`;

export const ProjectById = gql`
  query ProjectById($where: ProjectWhereInput!) {
    project(where: $where) {
      id
      title
      description
      active
      link
      version
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
  }
`;

export const ProjectWithNode = gql`
  query ProjectWithNode($id: ID!) {
    node(id: $id) {
      ...ProjectFields

      screenShots(first: 10) {
        history(limit: 10) {
          ...ImageFields
        }
      }
    }
  }
`;
export const ProjectsWhereActiveStage = gql`
  query ProjectsWhereActiveStage($edge: ProjectEdge!, $stage: Stage = DRAFT) {
    projectsConnection(edge: $edge, stage: $stage) {
      edges {
        node {
          ...ProjectFields

          screenShots(first: 10) {
            history(limit: 10) {
              ...ImageFields
            }
          }
        }
      }
    }
  }
`;

export const AllUsers = gql`
  query AllUsers {
    users {
      ...UserFields
    }
  }
`;

export const UserById = gql`
  query UserById($where: UserWhereInput!) {
    user(where: $where) {
      ...UserFields
    }
  }
`;

export const UsersWhereActiveNameContains = gql`
  query UsersWhereActiveNameContains(
    $edges: UserEdge!
    $orderBy: Order = "name_DESC"
    $stage: Stage = DRAFT
  ) {
    usersConnection(edges: $edges, orderBy: $orderBy, stage: $stage) {
      edges {
        node {
          ...UserFields
        }
      }
    }
  }
`;
