import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../../generated/frontend/sdk';

const gqlClient = new GraphQLClient(process.env.GRAPHCMS_URI as string, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}` as string,
  },
});

export const GraphCMS = getSdk(gqlClient);
