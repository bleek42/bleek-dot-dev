/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      cssProp: true,
    },
  },

  eslint: {
    dirs: ['pages/**/*.tsx', 'components/**/*.tsx', 'constants/**/*.tsx', 'context/**/*.tsx'],
  },
};
