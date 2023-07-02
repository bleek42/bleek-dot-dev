import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import {} from 'graphql-request';

import { Reducer, useEffect, useReducer } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GraphQLError } from 'graphql';

type ActionType = 'REQUEST' | 'SUCCESS' | 'ERROR';
type Payload = Awaited<unknown[] | unknown> | Promise<unknown[] | unknown>;
interface Actions<T, P> {
  type: T;
  payload: P;
}

interface State {
  data: Payload;
  loading: boolean;
  error: null | boolean | Awaited<unknown[] | unknown>;
  msg?: string;
  debug?: unknown;
}

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

  const reducer: Reducer<State, Actions<ActionType, Payload>> = (
    state: State,
    action: Actions<ActionType, Payload>
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
    Reducer<State, Actions<ActionType, Payload>>
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
