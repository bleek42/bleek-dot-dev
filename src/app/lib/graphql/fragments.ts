import { gql } from 'graphql-tag';

export const UserFields = gql`
  fragment UserFields on User {
    id
    name
    kind
    isActive
    picture
    stage
    createdAt
    updatedAt
  }
`;

export const ProjectFields = gql`
  fragment ProjectFields on Project {
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
    locale
  }
`;

export const ImageFields = gql`
  fragment ImageFields on Asset {
    id
    url
    handle
    fileName
    mimeType
    width
    height
    size
  }
`;
