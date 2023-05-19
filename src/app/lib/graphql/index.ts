import { GraphQLClient } from 'graphql-request';
// import { type Sdk, type SdkFunctionWrapper, getSdk } from './gen/gql.client';

export const queryAllProjects = async () => {
  const client = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL as string
  );

  const sdk = getSdk(client);
  const { projects } = await sdk?.projects();
  return projects ?? projects;
};
