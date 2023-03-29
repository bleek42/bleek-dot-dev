import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import type { QueryProjectsArgs, QueryProjectArgs } from '../../generated/frontend/typeDefs';

export default async function handler<NextApiHandler>(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { title } = req.body;
  try {
    if (req.method !== 'GET') {
      res.status(401).send('Unauthorized Request.');
    }
    res.status(200).json({ message: 'happy path!' });
    res.status(200).send({ message: 'OK' });
  } catch {
    res.status(500).send({ message: 'Internal Server Error!' });
  } finally {
    console.log('Pinged Next API Route!');
  }
}
