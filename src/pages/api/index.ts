import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export default async function handler<NextApiHandler>(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiHandler> {
  console.log('preview:', { req, res });
  try {
    if (req.headers['Authorization'] !== process.env.HYGRAPH_READONLY_API_KEY && req.method !== 'POST') {
      res.status(401).send('Unauthorized Request.');
    }
    await new Promise(() => res.status(200).json({ message: 'Successful request to GraphCMS URI!' }))
  }// eslint-disable-next-line prettier/prettier
  catch {
    res.status(500).send({ message: 'Internal Server Error!' });
  // eslint-disable-next-line prettier/prettier
  }
  finally {
    console.info(`Pinged Next.js API route with preview body: ${req.body}`);
  }
}
