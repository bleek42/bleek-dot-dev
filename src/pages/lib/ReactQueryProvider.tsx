// import { ReactNode, useRef } from 'react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import {
// 	type QueryFunction,
// 	type QueryClientProviderProps,
// 	type QueryClientConfig,
// 	QueryClient,
// 	QueryClientProvider,
// } from '@tanstack/react-query';
// import {
// 	type DocumentNode,
// 	type TypedQueryDocumentNode,
// 	type GraphQLErrorOptions,
// 	GraphQLError,
// } from 'graphql';
// import request, {
// 	type RequestExtendedOptions,
// 	type Variables,
// 	type RequestDocument,
// 	rawRequest,
// 	gql,
// } from 'graphql-request';
// import {
// 	type ResultOf,
// 	type VariablesOf,
// 	type TypedDocumentNode,
// 	type DocumentTypeDecoration,
// } from '@graphql-typed-document-node/core';

// export default function ReactQueryProvider({ children }: { children: ReactNode }) {
// 	const client = new QueryClient();
// 	const clientRef = useRef<QueryClient>();

// 	let doc: RequestDocument = gql(
// 		/*graphql*/
// 		`query AllProjects(
//  	$stage: Stage = PUBLISHED
//  	$orderBy: ProjectOrderByInput = createdAt_ASC
//  ) {
//  	projects(stage: $stage, orderBy: $orderBy) {
//  		id
//  		title
//  		link
//  		description
//  		version
//  		active
//  		sourceCode
//  		techStack
//  		createdAt
//  		updatedAt
//  		stage
//  		locale

//  		screenShots {
//  			id
//  			url
//  			handle
//  			fileName
//  			mimeType
//  			width
//  			height
//  			size
//  			createdAt
//  			updatedAt
//  			stage
//  			locale
//  		}
//  	}
//  }
// `
// 	);
// let vars: VariablesOf<RequestDocument> | null = null;

//  QueryFunction<RequestDocument, QueryKey = ['projects']>
// if (!clientRef.current) clientRef.current = client;

// clientRef.current?.setDefaultOptions({
// 	queries: {
// 		queryKey: ['projects'],
// 		queryFn: async () =>
// 			await rawRequest<typeof doc>(
// 				process.env.NEXT_PUBLIC_HYGRAPH_CDN_URL as string,
// 				doc.toString()
// 			).then((result) => {
// 				console.log(result);
// 				return result ?? null;
// 			}),
// 		initialData: () => clientRef?.current?.prefetchQuery(['projects']),
// 		cacheTime: 100000,
// 		staleTime: 300000,
// 	},
// });
// 	console.log(clientRef.current);

// 	return (
// 		<QueryClientProvider client={clientRef.current}>
// 			<ReactQueryDevtools />
// 			{children}
// 		</QueryClientProvider>
// 	);
// }

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
