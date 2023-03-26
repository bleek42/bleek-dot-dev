import { IProject } from '../../../types/project';
import { Schema, model, Model, models } from 'mongoose';

const ProjectSchema: Schema<IProject> = new Schema({
  title: String,
  description: String,
  link: String,
  techStack: [String],
  sourceCode: [String],
  screenShots: [String],
  createdAt: Date,
  updatedAt: Date,
});

export const Project: Model<IProject> =
  models['projects'] || model('projects', ProjectSchema);
