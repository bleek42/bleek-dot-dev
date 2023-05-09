import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

import { graphql } from '../gen';

export const allProjectsDoc = graphql(`
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
`) as TypedDocumentNode;
