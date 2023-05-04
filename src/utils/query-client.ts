import { QueryClient, QueryClientConfig, QueryCache } from '@tanstack/react-query';
import graphqlClient from './gql-client';

import { type DocumentType, graphql } from '@gql/gen';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { AllProjectsQuery, AllProjectsDocument } from '@gql/gen/graphql';
// import { AllProjectsDocument, AllProjectsQuery } from './gen/graphql';
const projects = graphql(`
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

const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      queryKey: ['projects'],
      queryFn: async () => await graphqlClient.request(projects),
    },
  },
};

const queryClient: QueryClient = new QueryClient(config);

export default queryClient;
