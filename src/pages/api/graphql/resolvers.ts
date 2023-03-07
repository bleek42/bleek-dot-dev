import { models } from 'mongoose';
import { ApolloError } from 'apollo-server-micro';
import { IResolvers } from '@graphql-tools/utils';
import {
  DateResolver,
  GraphQLObjectID,
  ObjectIDResolver,
  URLResolver,
} from 'graphql-scalars';

import { IProject } from '../../../types/project';
import { Project } from '../models/project.model';

export const resolvers: IResolvers = {
  ObjectID: ObjectIDResolver,
  Date: DateResolver,
  URL: URLResolver,

  TechCategory: {
    FRONTEND: 'FrontEnd',
    BACKEND: 'Backend',
    DATABASE: 'Database',
    TOOLS: 'Tools',
  },

  Query: {
    async projects(_parent, _args, _ctx): Promise<IProject[]> {
      const projects = await Project.find({});
      return projects;
    },
  },

  Mutation: {
    async createProject(
      _parent: any,
      {
        _id,
        title,
        description,
        link,
        techStack,
        sourceCode,
        screenShots,
      }: Partial<IProject>,
      _ctx: any
    ): Promise<IProject> {
      const project = new Project({
        _id: GraphQLObjectID,
        title,
        description,
        link,
        techStack,
        sourceCode,
        screenShots,
      });

      return await project.save();
    },
  },
};
