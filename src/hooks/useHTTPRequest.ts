import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { PatchedRequestInit } from 'graphql-request/dist/types';
import { type DocumentType, graphql } from '@gql/gen';

import { useEffect, useReducer } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GraphQLError } from 'graphql';

import { allProjectsDoc } from '@gql/docs';
import { hygraphClient } from '@/utils/gql-client';

interface State {
  data: Awaited<TypedDocumentNode[] | TypedDocumentNode> | unknown;
  loading: boolean;
  error: null | boolean | Awaited<unknown[] | unknown>;
  msg?: string;
  debug?: unknown;
}

type ActionType = 'REQUEST' | 'SUCCESS' | 'ERROR';

type Actions<T = ActionType> = {
  type: T;
  payload: Awaited<TypedDocumentNode[] | TypedDocumentNode> | unknown;
};

// import { AllProjectsDocument, AllProjectsQuery } from './gen/graphql';

export default function useHTTPRequest({
  method = 'GET',
  body = { ping: 'pong' },
  headers = { 'content-type': 'application/json' },
}) {
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
          msg: 'Sending HTTP request...',
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
          debug: action.payload,
        };
      default:
        return state;
    }
  };

  const [{ data, loading, error, msg }, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    let ignore = false;
    const url =
      process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com/todos/1';
    (async () => {
      try {
        const res = await fetch(`${url}`);
        if (!res.ok) dispatch({ type: 'ERROR', payload: { ...res } });
        const data = await res.json();
        dispatch({ type: 'SUCCESS', payload: data });
      } catch (err) {
        console.error(err);
      }
    })();
    return () => {
      ignore = true;
      // controller.abort();
    };
  }, [data, loading]);

  return { data, loading, error, msg };
}
