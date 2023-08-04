/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  swcMinify: true,
  outputFileTracing: true,

  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  compiler: {
    styledComponents: {
      cssProp: true,
      ssr: true,
      minify: true,
    },
  },

  images: {
    domains: ['media.graphassets.com', 'drive.google.com', 'photos.google.com'],
  },

  eslint: {
    dirs: [
      'src/pages/**/*.{tsx,ts}',
      'src/components/**/*.{tsx,ts}',
      'src/hooks/**/*.{tsx,ts}',
      'src/context/**/*.{tsx,ts}',
      'src/utils/*.{tsx,ts}',
      'src/interfaces/**/*.ts',
      'src/graphql/**/*.{gql,graphql,ts}',
    ],
  },
  async headers() {
    return await new Promise((res) =>
      res([
        {
          source: '/fonts/birdman/birdman.ttf',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ]),
    );
  },
};

