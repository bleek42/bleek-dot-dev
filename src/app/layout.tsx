import type { ChildrenProps } from '@/props/children.props';
import { GraphQLError } from 'graphql';

import StyledRegistry from './lib/StyledRegistry.tsx';
// import { hygraphClient } from '@/utils/gql-client';

export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang="en">
			<head>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>bleekDotDev</title>
			</head>
			<body>
				{/* <QueryClientProvider client={ref.current}> */}
				<StyledRegistry>{children}</StyledRegistry>
				{/* <ReactQueryDevtools initialIsOpen={false} position="top-left" /> */}
				{/* </QueryClientProvider> */}
			</body>
		</html>
	);
}
