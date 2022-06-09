import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export default async function handler<NextApiHandler>(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { title } = req.body;
  try {
    if (req.headers.authorization !== process.env.GRAPHCMS_URI && req.method !== 'POST') {
      res.status(401).send('Unauthorized Request.');
    }
    res.status(200).json({ message: 'Successful request to GraphCMS URI!' });
  } catch {
    res.status(500).send({ message: 'Internal Server Error!' });
  } finally {
    console.info(`Pinged Next.js API route with title preview: ${title}`);
  }
}
