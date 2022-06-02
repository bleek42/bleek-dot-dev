import { Maybe } from '@graphql-tools/utils/types';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import Error from 'next/error';

export class PageError extends Error {
  public static hasErr?: boolean;
  public static err?: Error | GraphQLFormattedError | string;
  public errType?: Maybe<GraphQLError | Error>;
}
