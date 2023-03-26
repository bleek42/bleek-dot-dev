import type { NextApiHandler } from 'next';

import * as dotenv from 'dotenv';

import { schema } from './graphql/schema';

dotenv.config();

let gqlHandler: NextApiHandler | undefined;

const apiHandler: NextApiHandler = async (req, res) => {
  if (!gqlHandler) {
    return null;
  }
  return true;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiHandler;
