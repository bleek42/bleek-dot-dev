import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { PatchedRequestInit } from 'graphql-request/dist/types';
import { type DocumentType, graphql } from '@gql/gen';

import { useEffect, useReducer } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GraphQLError } from 'graphql';

import { allProjectsDoc } from '@gql/docs';
import { hygraphClient } from '@utils/gql-client';

interface State {
  data: Awaited<TypedDocumentNode[] | TypedDocumentNode> | unknown;
  loading: boolean;
  error: null | boolean | Awaited<unknown[] | unknown>;
  msg?: string;
}

type ActionType = 'REQUEST' | 'SUCCESS' | 'ERROR';

type Actions<T = ActionType> = {
  type: T;
  payload: Awaited<TypedDocumentNode[] | TypedDocumentNode> | unknown;
};

// import { AllProjectsDocument, AllProjectsQuery } from './gen/graphql';

export default function useHygraphQuery() {
  const initState: State = {
    data: [],
    loading: false,
    error: null,
    msg: '',
  };

  const reducer = (state: State, action: Actions): State => {
    switch (action.type) {
      case 'REQUEST':
        return {
          ...state,
          loading: true,
          error: false,
          msg: 'Sending request to server...',
        };
      case 'SUCCESS':
        return {
          ...state,
          data: action.payload,
          loading: false,
          msg: 'OK: Successful request!',
        };
      case 'ERROR':
        return {
          ...state,
          loading: false,
          error: true,
          msg: 'ERROR: Unsuccessful Request!',
        };
      default:
        return state;
    }
  };

  const [{ data, loading, error, msg }, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    let ignore = false;
    const gqlClientQuery = async <TDoc, TVars>(
      document: TypedDocumentNode<TDoc>,
      ...[variables]: TVars extends Record<string | number | symbol, unknown>
        ? Record<string | number | symbol, unknown>
        : [TVars]
    ) => {
      console.log(document, ...[variables]);

      const hygraphOptions: PatchedRequestInit = {
        credentials: 'include',
        cache: 'only-if-cached',
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN}`,
          'content-type': 'application/json',
        },
      };
      const hygraphClient: GraphQLClient = new GraphQLClient(
        `${process.env.NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
        hygraphOptions
      );

      try {
        const payload = await hygraphClient.request(document, variables);
        console.log(payload);
        if (payload && !ignore) dispatch({ type: 'SUCCESS', payload });
      } catch {
        // throw new GraphQLError('GQL ERR: Hygraph request failed!');
        dispatch({ type: 'ERROR', payload: 'Unknown useRequest Error' });
      }
    };

    gqlClientQuery(allProjectsDoc, []);

    return () => {
      ignore = true;
      // controller.abort();
    };
  }, []);

  return { data, loading, error, msg };
}
