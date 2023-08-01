// import { type NextApiRequest, type NextApiResponse, type NextApiHandler } from 'next';

// // eslint-disable-next-line @typescript-eslint/require-await
// export default async function handler<T extends object>(
//   req: NextApiRequest,
//   res: NextApiResponse<T>,
// ): Promise<NextApiHandler | void> {
//   try {
//     if (req.method !== 'GET') {
//       res.status(401).send('Unauthorized Request.');
//     }
//     res.status(200).json({ message: 'happy path!' });
//   } catch {
//     // eslint-disable-next-line prettier/prettier
//     res.status(500).send({ message: 'Internal Server Error!' });
//   } finally {
//     // eslint-disable-next-line prettier/prettier
//     console.log('Pinged Next API Route!');
//   }
// }
