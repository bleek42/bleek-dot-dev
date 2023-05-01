import { dehydrate, useQuery, useQueryClient } from '@tanstack/react-query';

import client from '@utils/query-client';
import graphqlClient from '@utils/gql-client';
import { allProjects } from '@api/graphql/hygraph.queries.ts';

export default function useHygraphQuery() {
  const queryClient = useQueryClient({});
  const prefetchAllProjectsQuery = async () => {
    return await queryClient.prefetchQuery({
      queryKey: ['projects'],
      queryFn: () =>
        graphqlClient
          .request(allProjects)
          .then((results) => console.table({ results }))
          .catch((err: unknown) => console.error({ err })),
      staleTime: 100800000, // ? 7 days in milsecs
    });
  };

  console.log(prefetchAllProjectsQuery());
}
