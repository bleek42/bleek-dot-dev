import { gqlRequest } from '@api/gql.req';

// const allProjectsQuery = graphql(/* GraphQL */ `
//   query allProjects {
//     projects {
//       title
//       description
//       active
//       id
//       link
//       sourceCode
//       techStack
//       version
//       createdAt
//       updatedAt
//       screenShots {
//         fileName
//         id
//         mimeType
//         url
//       }
//     }
//  `);

export function useGraphQLRequest<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<ExecutionResult<TResult>> | void {
  console.log(document, variables);
  // gqlRequest(document, ...[variables]).then((result) => )
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  // return useQuery([(document?.definitions[0] as unknown)?.name?.value, variables], () =>
  //   gqlClientRequest(document, variables)
  // );
}
