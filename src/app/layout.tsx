import type { ChildrenProps } from '@/props/children.props';
import {
	type QueryClientConfig,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useRef } from 'react';
import { GraphQLError } from 'graphql';

import StyledRegistry from './lib/StyledRegistry.tsx';
// import { hygraphClient } from '@/utils/gql-client';

export default function RootLayout({ children }: ChildrenProps) {
	const ref = useRef<QueryClient>();
	const config: QueryClientConfig = {
		defaultOptions: {
			queries: {
				queryKey: ['projects'],
				initialData: ref?.current?.prefetchQuery(['projects']),
				cacheTime: 100000,
				staleTime: 300000,
			},
		},
	};

	if (!ref.current) ref.current = new QueryClient(config);
	console.log(ref.current);

	return (
		<html lang="en">
			<head>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>bleekDotDev</title>
			</head>
			<body>
				<QueryClientProvider client={ref.current}>
					<StyledRegistry>{children}</StyledRegistry>
					<ReactQueryDevtools initialIsOpen={false} position="top-left" />
				</QueryClientProvider>
			</body>
		</html>
	);
}
