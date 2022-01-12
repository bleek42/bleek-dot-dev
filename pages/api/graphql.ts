import { ApolloServer, gql } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { connectDb } from './db/connectDb';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { NextApiHandler } from 'next';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async () => {
		const db = await connectDb();
		return { db };
	},
	plugins: [...(process.env.NODE_ENV === 'development' ? [ApolloServerPluginLandingPageGraphQLPlayground] : [])],
});

let graphqlHandler: NextApiHandler | undefined;

const apiHandler: NextApiHandler = async (req, res) => {
	if (!graphqlHandler) {
		await server.start();
		graphqlHandler = server.createHandler({ path: '/api/graphql' });
	}
	console.log(req, res);
	return graphqlHandler(req, res);
};

export const config = {
	api: {
		bodyParser: false,
	},
};

export default apiHandler;
