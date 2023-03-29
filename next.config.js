/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
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
