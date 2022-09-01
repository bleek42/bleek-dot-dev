/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    dirs: ['pages/**/*', 'components/**/*', 'constants/**/*', 'context/**/*', 'types/**/*'],
  },
};
