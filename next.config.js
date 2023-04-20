/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  // ! ...DEPRECATED?
  // ! env: {
  // !  NODE_ENV: process.env.NODE_ENV,
  // !  PORT: process.env.PORT,
  // !  HYGRAPH_READONLY_API_URL: new URL(process.env.HYGRAPH_READONLY_API_URL),
  // !  HYGRAPH_READONLY_API_KEY: process.env.HYGRAPH_READONLY_API_KEY,
  // !},
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },

  eslint: {
    dirs: [
      'src/pages/**/*.{tsx,ts}',
      'src/components/**/*.{tsx,ts}',
      'src/constants/**/*.ts',
      'src/context/**/*.tsx',
      'src/types/**/*.ts',
    ],
  },
};
