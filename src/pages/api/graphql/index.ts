// import request, { RequestExtendedOptions } from 'graphql-request';

// const createGqlRequest = (url: string) => {
//   console.info('making GraphQL request...');
//   // url = new URL(url);
//   const opts: RequestExtendedOptions = {
//     requestHeaders: {
//       // eslint-disable-next-line prettier/prettier
//       Authorization: `Bearer ${process.env.HYGRAPH_READONLY_API_URL}`,
//     },

//     document: {},
//   };
//   request(opts)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => (err ? console.error({ err }) : console.error('gql request error')));
// };
