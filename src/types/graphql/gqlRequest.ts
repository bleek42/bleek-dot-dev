import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { AllProjectsQuery, AllProjectsDocument } from './gen/graphql';
// import { useQueryClient } from '@tanstack/react-query';

// import graphqlClient from '@utils/gql-client';

import { type DocumentType, graphql } from './gen';
// import { AllProjectsDocument, AllProjectsQuery } from './gen/graphql';
export const allProjectsDocument = graphql(AllProjectsDocument)
// query AllProjects {
//   projects {
//     title
//     description
//     active
//     id
//     link
//     sourceCode
//     techStack
//     version
//     createdAt
//     updatedAt
//     screenShots {
//       fileName
//       id
//       mimeType
//       url
//     }
//   }
// }`
