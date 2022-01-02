import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

import { createConnection } from './config/createConnection';
import { Project } from './models/project.model';

const projectHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') {
		res.status(405).send({ message: `${req.method} unsupported!` });
	}

	const connection = await createConnection();

	if (!connection) {
		console.error('connection failure');
	}

	try {
		const projects = await Project.find({});

		if (!projects) {
			res.status(400).json({ message: 'Cannot GET Projects!' });
		}

		res.status(200).json(projects);
	} catch {
		res.status(500).json({ message: 'Internal Server Error!' });
	}
};

export default projectHandler;
