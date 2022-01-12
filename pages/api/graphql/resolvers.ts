import { models } from 'mongoose';
import { IResolvers } from '@graphql-tools/utils';
import { ApolloError } from 'apollo-server-micro';

import { IProject } from '../../../types/project';
import { Project } from '../models/project.model';

interface IContext {
	models: {
		project: typeof Project;
	};
}

export const resolvers: IResolvers<any> = {
	Query: {
		async projects(parent, args, context) {
			try {
				const projects = await context.models.project.find();
				return projects;
			} catch (err) {
				console.log(err);
				throw new ApolloError('Error retrieving projects!');
			}
		},
	},
};
