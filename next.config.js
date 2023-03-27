/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: './src',
  typescript: './tsconfig.json',
  env: {},
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  eslint: {
    dirs: ['pages/**/*.tsx', 'components/**/*.tsx', 'constants/**/*.tsx', 'context/**/*.tsx'],
  },
};
