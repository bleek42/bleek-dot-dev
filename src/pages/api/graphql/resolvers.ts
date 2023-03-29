import { IResolvers } from '@graphql-tools/utils';
import {
  DateResolver,
  GraphQLObjectID,
  ObjectIDResolver,
  URLResolver,
} from 'graphql-scalars';

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

    async projects(_parent, _args, _ctx): Promise<void> {
      console.log('all projects query')
    },

  },

  Mutation: {

    async createProject(
      _parent: any,
      {
        id,
        title,
        description,
        link,
        techStack,
        sourceCode,
        screenShots,
      }: unknown,
      _ctx: any
    ): Promise<any> {
     console.log('all projects query')
    },

  },

};
