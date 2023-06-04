import { useRef } from 'react';
import { DocumentNode, GraphQLError } from 'graphql';
import {
	ResultOf,
	VariablesOf,
	type TypedDocumentNode,
} from '@graphql-typed-document-node/core';
import { QueryFunction, type QueryClientProviderProps } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import request, {
	type RequestExtendedOptions,
	type Variables,
	GraphQLClient,
	RequestDocument,
} from 'graphql-request';
import {
	type QueryClientConfig,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';

export default function ReactQueryProvider({ children }: QueryClientProviderProps) {
	const ref = useRef<QueryClient>();
	const queryClient: QueryClient = new QueryClient();
	let doc: DocumentNode | RequestDocument;
	let vars: VariablesOf<RequestDocument>;
	// let document: TypedDocumentNode<
	// 	Record<string | symbol, RequestExtendedOptions>,
	// 	Variables
	// >;

	// const config: QueryClientConfig = {
	// 	defaultOptions: {
	// 		queries: {
	// 			queryKey: ['projects'],

	// 		},
	// 	},
	// };

	//  QueryFunction<RequestDocument, QueryKey = ['projects']>
	if (!ref.current) ref.current = queryClient;

	ref.current?.setDefaultOptions({
		queries: {
			queryKey: ['projects'],
			queryFn: () =>
				request<typeof doc, typeof vars>(
					process.env.NEXT_PUBLIC_HYGRAPH_CDN_URL as string,
					doc
				).then((result) => {
					console.log(result);
					return result ?? null;
				}),
			initialData: () => ref?.current?.prefetchQuery(['projects']),
			cacheTime: 100000,
			staleTime: 300000,
		},
	});
	console.log(ref.current);

	return (
		<QueryClientProvider client={ref?.current}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} position="top-right" />
		</QueryClientProvider>
	);
}

// errorTypes={[
// 	{
// 		name: 'GraphQL Error',
// 		initializer: (
// 			query = {
// 				queryKey: ['projects'],
// 				state: { data: request(), dataUpdatedAt: new Date().toLocaleDateString(), error:  },
// 			}
// 		) => new GraphQLError('GraphQL caught an unknown error...'),
// 	},
// ]}
