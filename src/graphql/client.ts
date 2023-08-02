import { GraphQLClient } from 'graphql-request';

import { getAllProjectsWhereSdk, getAssetWhereUniqueSdk } from '@/graphql/queries';

export const hygraphReqConfig: Record<string | number | symbol, any> = {
  credentials: 'include',
  mode: 'cors',
  headers: {
    'Authorization': `Bearer ${process.env.HYGRAPH_CDN_AUTH}`,
    'Content-Type': 'application/json',
  },
};

const client: GraphQLClient = new GraphQLClient(`${process.env.HYGRAPH_CDN_URL}`);
// console.log(window);
export const allProjectsQuery = getAllProjectsWhereSdk(client);

export const assetWhereQuery = getAssetWhereUniqueSdk(client);

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
