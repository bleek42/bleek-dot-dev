import { Model, Types } from 'mongoose';

enum TechType {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  TOOLS = 'tools',
}

interface ITech {
  name: string;
  techCategory: TechType;
}

export interface IProject {
  readonly _id: Types.ObjectId;
  title: string;
  description: string;
  link: URL;
  sourceCode: URL[];
  screenShots: URL[];
  techStack: ITech[];
  createdAt: Date;
  updatedAt?: Date;
}
