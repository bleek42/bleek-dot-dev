// import * as dotenv from 'dotenv';
import path from 'path';

export const getNodeEnv = async () => {
  try {
    const dotenv = await import('dotenv');
    if (!dotenv) {
      throw Error('error importing dynamic module "dotenv"...');
    }
    dotenv.config({ path: path.join(process.cwd(), '/.env.local'), encoding: 'utf-8' });

    return await Promise.resolve({
        NODE_ENV: process.env.NODE_ENV,
        // eslint-disable-next-line prettier/prettier
        PORT: process.env.PORT,
        HYGRAPH_READONLY_API_URL: process.env.HYGRAPH_READONLY_API_URL,
        HYGRAPH_READONLY_API_KEY: process.env.HYGRAPH_READONLY_API_KEY,
  // eslint-disable-next-line prettier/prettier
  })

    // const result = {
    //   ENV: path.join(process.cwd(), '/.env.local'),
    //   NODE_ENV: process.env.NODE_ENV,
    //   PORT: process.env.PORT,
    //   HYGQL_API_URL: process.env.HYGRAPH_READONLY_API_URL,
    //   HYGQL_API_KEY: process.env.HYGRAPH_READONLY_API_KEY,
    // };

    // eslint-disable-next-line prettier/prettier
  }
  catch (err) {
    console.error(err);
    throw Error(err ? err.toString() : 'unknown error getting nodejs env...');
  }
};
