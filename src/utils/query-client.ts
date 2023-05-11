import type { QueryClientConfig } from '@tanstack/react-query';
import type { RequestDocument } from 'graphql-request';

import { QueryClient } from '@tanstack/react-query';

// const config: QueryClientConfig = {
//   defaultOptions: {}
//   queryCache: {},
// };

const client: QueryClient = new QueryClient();

export default client;
