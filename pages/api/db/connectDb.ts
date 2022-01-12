import { Connection, createConnection, connect } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
	NODE_ENV: process.env.NODE_ENV,
	MONGODB_URI: process.env.MONGODB_URI,
};

export const connectDb = async () => {
	try {
		return await connect(`${env.MONGODB_URI}`);
	} catch (err) {
		console.error(`Error connecting to MongoDB instance: ${err}`);
		process.exit(1);
	}
};
