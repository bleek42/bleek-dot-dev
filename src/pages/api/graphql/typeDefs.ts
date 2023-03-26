import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  scalar Date
  scalar ObjectID
  scalar URL

  enum TechCategory {
    FRONTEND
    BACKEND
    DATABASE
    TOOLS
  }

  # type TechItem {
  #   name: String!
  #   category: TechCategory!
  # }

  # type TechStack {
  #   techItem: TechItem!
  # }

  type Project {
    _id: ObjectID
    title: String!
    description: String!
    link: URL!
    techStack: [TechStack]!
    sourceCode: [URL]!
    screenShots: [URL]!
    createdAt: Date!
    updatedAt: Date
  }

  type Query {
    projects: [Project]!
    project(_id: ObjectID!): Project!
  }

  # input CreateTechItem {
  #   name: String!
  #   category: TechCategory!
  # }

  input CreateTechStack {
    techItem: {
			name: String!
			category: TechCategory!
		}
  }

  input CreateProjectItem {
    title: String!
    description: String!
    link: URL!
    techStack: [CreateTechStack]!
    sourceCode: [URL]!
    screenShots: [URL]!
    createdAt: Date!
  }

  input UpdateTechItem {
    name: String
    category: TechCategory
  }

  input UpdateProjectItem {
    title: String
    description: String!
    link: String
    techStack: [UpdateTechItem]!
    sourceCode: [URL]!
    screenShots: [URL]!
    updatedAt: Date!
  }

  type Mutation {
    createProject(input: CreateProjectItem!): Project
    updateProject(input: UpdateProjectItem!): Project
    deleteProject(_id: ObjectID!): Project
  }
`;
