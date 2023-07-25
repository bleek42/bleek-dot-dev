// import { type NextApiRequest, type NextApiResponse, type NextApiHandler } from 'next';

// import { type AllProjectsWhereQuery } from '@/graphql/gen';
// import { hygraphClient } from '@/utils/gql-client';

// // import { createGraphQLClientRequest } from '@/utils/gql-client';

// export default async function handler<T extends AllProjectsWhereQuery = { message: string }>(
//   req: NextApiRequest,
//   res: NextApiResponse<T>
// ): Promise<NextApiHandler | void> {
//   if (
//     req.headers.authorization !== process.env.HYGRAPH_API_AUTH_TOKEN &&
//     req.method !== 'POST'
//   ) {
//     return res.status(401).json(<T>{ message: 'Unauthorized Request.' });
//   }

//   try {
//     const result: Awaited<T> = await hygraphClient.AllProjectsWhere({
//       'first': 10,
//     });
//     console.log(result);
//     res.status(200).json(<T>{ ...result });
//   }
//     catch {
//     // eslint-disable-next-line prettier/prettier
//     return res.status(500).send(<T>{ message: 'Internal Server Error!' });
//   }
//     // eslint-disable-next-line prettier/prettier
//   finally {
//     console.info(`Pinged Next.js API route with title preview: ${req.env}`);
//   }
// }
