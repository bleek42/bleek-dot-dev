import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { PatchedRequestInit } from 'graphql-request/dist/types';

import { Reducer, useEffect, useReducer } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GraphQLError } from 'graphql';

interface State {
  data:
    | Awaited<TypedDocumentNode[] | TypedDocumentNode>
    | Promise<TypedDocumentNode[] | TypedDocumentNode>
    | unknown;
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
    msg: '',
    data: [],
    loading: false,
    error: null,
    debug: null,
  };

  const reducer: Reducer<State, Actions<ActionType>> = (
    state: State,
    action: Actions<ActionType>
  ): State => {
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

  const [{ data, loading, error, msg }, dispatch] = useReducer<
    Reducer<State, Actions<ActionType>>
  >(reducer, initState);
  useEffect(() => {
    let ignore = false;
    const url =
      process.env.HYGRAPH_API_BASE_URL || 'https://jsonplaceholder.typicode.com/todos/1';
    (async () => {
      dispatch({
        type: 'REQUEST',
        payload: null,
      });

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
    };
  }, [data, loading, error, msg]);

  return { data, loading, error, msg };
}
