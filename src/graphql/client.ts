import { GraphQLClient } from 'graphql-request';

import { getAllProjectsWhereSdk, getAssetWhereUniqueSdk } from '@/graphql/queries/hygraph';


const client: GraphQLClient = new GraphQLClient(process.env.HYGRAPH_CDN_URL);

export const allProjectsQuery = getAllProjectsWhereSdk(client);

export const assetWhereQuery = getAssetWhereUniqueSdk(client);
