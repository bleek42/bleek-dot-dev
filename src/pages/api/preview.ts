import { type NextApiRequest, type NextApiResponse, type NextApiHandler } from 'next';

// eslint-disable-next-line @typescript-eslint/require-await
export default async function handler<T extends object>(
  req: NextApiRequest,
  res: NextApiResponse<T>
): Promise<NextApiHandler | void> {
  try {
    if (req.method !== 'GET') {
      res.status(401).send('Unauthorized Request.');
    }
    res.status(200).json({ message: 'happy path!' });
  } 
  // eslint-disable-next-line prettier/prettier
  catch {
    res.status(500).send({ message: 'Internal Server Error!' });
  } 
  // eslint-disable-next-line prettier/prettier
  finally {
    console.log('Pinged Next API Route!');
  }
}
