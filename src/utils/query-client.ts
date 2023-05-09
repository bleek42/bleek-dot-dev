// 'use client';

import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { type DocumentType, graphql } from '@gql/gen';
import { QueryClient, QueryClientConfig, QueryCache } from '@tanstack/react-query';

import { MutableRefObject, cache } from 'react';
import hygraphQuery from '@hooks/hygraphQuery';
import { allProjectsDoc } from '@gql/docs';
// import { AllProjectsDocument, AllProjectsQuery } from './gen/graphql';

export const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      queryKey: ['projects'],
      queryFn: () => hygraphQuery(allProjectsDoc),
      initialData: hygraphQuery(allProjectsDoc),
      staleTime: 6000,
    },
  },
};

// export const queryClient = cache(() => new QueryClient(config));
