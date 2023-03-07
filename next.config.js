/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: './src',
  typescript: './tsconfig.json',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    dirs: [
      'pages/**/*',
      'components/**/*',
      'constants/**/*',
      'context/**/*',
      'types/**/*',
    ],
  },
};
