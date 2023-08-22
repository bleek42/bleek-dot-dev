import { GraphQLClient } from 'graphql-request';

import { getAllProjectsWhereSdk, getAssetWhereUniqueSdk } from '@/graphql/queries';


const client: GraphQLClient = new GraphQLClient(process.env.HYGRAPH_CDN_URL);

export const allProjectsQuery = getAllProjectsWhereSdk(client);

export const assetWhereQuery = getAssetWhereUniqueSdk(client);
