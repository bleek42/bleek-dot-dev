import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
	type Project {
		_id: ID!
		title: String!
		link: String!
		sourceCode: [String!]!
		screenShots: [String!]!
		createdAt: String
		updatedAt: String
	}

	type Query {
		projects: [Project]
	}
`;
