import { Document, ObjectId } from 'mongoose';

interface IUrl {
	url: string;
}

export interface IProject extends Document {
	title: string;
	description: string;
	link: string;
	sourceCode: IUrl[];
	screenShots: IUrl[];
	createdAt: Date;
	updatedAt?: Date;
}
