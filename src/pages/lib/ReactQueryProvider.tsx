import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
	type QueryFunction,
	type QueryClientProviderProps,
	type QueryClientConfig,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import request, {
	type RequestExtendedOptions,
	type Variables,
	type RequestDocument,
} from 'graphql-request';
import {
	type ResultOf,
	type VariablesOf,
	type TypedDocumentNode,
} from '@graphql-typed-document-node/core';

function ReactQueryProvider() {
	const client = new QueryClient()
	 QueryClientProviderProps
	const ref = useRef<QueryClient>(client);
	// const queryClient: QueryClient = new QueryClient();
	let doc: DocumentNode | RequestDocument;
	let vars: VariablesOf<RequestDocument>;
	// let document: TypedDocumentNode<
	// 	Record<string | symbol, RequestExtendedOptions>,
	// 	Variables
	//

	//  QueryFunction<RequestDocument, QueryKey = ['projects']>
	if (!ref.current) ref.current = new QueryClient();

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
	<div>ReactQueryProvider</>
  )
}

export default ReactQueryProvider


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
