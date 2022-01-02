import mongoose from 'mongoose';

const { DATABASE_URL } = process.env;

export const createConnection = async () => {
	const connection = await mongoose
		.connect(DATABASE_URL as string)
		.then(() => console.info(`MongoDB connection established at ${DATABASE_URL}`))
		.catch((err) => console.error(err));

	return { connection };
};
