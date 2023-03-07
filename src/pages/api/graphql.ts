<<<<<<< HEAD
import type { NextApiHandler } from 'next';

import * as dotenv from 'dotenv';

import { schema } from './graphql/schema';

dotenv.config();

let gqlHandler: NextApiHandler | undefined;

const apiHandler: NextApiHandler = async (req, res) => {
  if (!gqlHandler) {
    return null;
  }
  return true;
=======
import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

import { schema } from './graphql/schema';

import { NextApiHandler } from 'next';

dotenv.config();

const server = new ApolloServer({
  schema,
  context: async () => {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    return { db };
  },
  plugins: [
    ...(process.env.NODE_ENV === 'development'
      ? [ApolloServerPluginLandingPageGraphQLPlayground]
      : []),
  ],
});

let graphqlHandler: NextApiHandler | undefined;

const apiHandler: NextApiHandler = async (req, res) => {
  if (!graphqlHandler) {
    await server.start();
    graphqlHandler = server.createHandler({ path: '/api/graphql' });
  }
  return graphqlHandler(req, res);
>>>>>>> 0aac855 (huge overhaul: brought in components, new styles from original bleekdottech repo; refaftored types, modified configs, fixed typing issue across component props mostly with JSX.IntrinsicElems, etc...)
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiHandler;
