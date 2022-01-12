import { IProject } from '../../../types/project';
import { Schema, model, models } from 'mongoose';

const ProjectSchema: Schema = new Schema({
	title: String,
	desription: String,
	link: String,
	sourceCode: [String],
	screenShots: [String],
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	updatedAt: Date,
});

export const Project = model<IProject>('project', ProjectSchema);
