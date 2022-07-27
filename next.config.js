<<<<<<< HEAD
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}
=======
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  eslint: {
    dirs: ['pages', 'components', 'constants', 'types']
  }
};
>>>>>>> b4d0830 (add prettier; replace apollo with gqlreq pkg; refactored some of the file structure, fixed errors in some components; generated new types techstack assets for graphcms)
