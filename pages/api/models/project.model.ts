import { IProject } from './../../../types/project';
import { model, models, Schema } from 'mongoose';

const ProjectSchema: Schema = new Schema({
	title: String,
	description: String,
	link: String,
	sourceCode: [String],
	screenShots: [String],
});

export const Project = model<IProject>('project', ProjectSchema);
