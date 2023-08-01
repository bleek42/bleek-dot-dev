import { GraphQLClient } from 'graphql-request';

import { getAllProjectsWhereSdk, getAssetWhereUniqueSdk } from '@/graphql/gen';

const graphQLClient: GraphQLClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_HYGRAPH_CDN_URL}`,
);

export const allProjectsQuery = getAllProjectsWhereSdk(graphQLClient);

export const assetWhereQuery = getAssetWhereUniqueSdk(graphQLClient);

// export async function createGraphQLRequest<TResult, Variables>(
//   document: TypedDocumentNode<TResult>,
//   ...[variables]: Variables extends Record<string, never> ? [] : [Variables]
// ) {
//   console.log(document, ...[variables]);
//   const conf: RequestConfig = {
//     credentials: 'include',
//     cache: 'force-cache',
//     mode: 'cors',
//     headers: {
//       'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPHCDN_AUTH_TOKEN}`,
//       'content-type': 'application/json',
//     },
//   };

//   const res = await graphQLClient.request(document, variables ?? undefined);
//   const request = request<TResult>(
//     `${process.env.NEXT_PUBLIC_HYGRAPHCDN_BASE_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
//     conf
//   );

//   console.log(request);
//   return request;
// }
