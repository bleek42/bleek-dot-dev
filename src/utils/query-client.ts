import type { QueryClientConfig } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import type { RequestDocument } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';
import { request } from 'graphql-request';

// const config: QueryClientConfig = {
//   defaultOptions: {}
//   queryCache: {},
// };

const client: QueryClient = new QueryClient();

export default client;
