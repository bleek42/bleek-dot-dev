import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
// import { useQueryClient } from '@tanstack/react-query';

import graphqlClient from '@utils/gql-client';

export async function graphQLRequest<T, V>(document: TypedDocumentNode<T, V>, variables?: V) {
  // ? REACT QUERY: useQuery({ queryKey: ['projects'], queryFn: ? }); | // ? useMutation({ mutationFn: ?, onSuccess: () => {}, onFail || ...others? });
  try {
    const result = await graphqlClient.request<T, V | unknown>(document, variables);
    console.log(result);
    // eslint-disable-next-line prettier/prettier
  }
  catch (err) {
    console.error(err);
    throw err;
  }
}
