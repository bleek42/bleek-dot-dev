import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export default async function handler<NextApiHandler>(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    res.status(200).send({ message: 'OK' });
  } catch {
    res.status(500).send({ message: 'Internal Server Error!' });
  } finally {
    console.log('Pinged Next API Route!');
  }
}
