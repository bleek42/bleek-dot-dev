import { type NextApiRequest, type NextApiResponse, type NextApiHandler } from 'next';

import { createGraphQLClientRequest } from '@/utils/gql-client';

async function handler: NextApiHandler;
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.headers.authorization !== process.env.GRAPHCMS_URI && req.method !== 'POST') {
    res.status(401).send('Unauthorized Request.');
  }

  try {
    const result = await createGraphQLClientRequest();
    res.status(200).json({ message: 'Successful request to GraphCMS URI!' });
  } catch {
    res.status(500).send({ message: 'Internal Server Error!' });
  } finally {
    console.info(`Pinged Next.js API route with title preview: ${title}`);
  }
}
