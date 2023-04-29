/* eslint-disable prettier/prettier */
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
      minify: true,
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

  experimental: {
    swcPlugins: [
      [
        '@graphql-codegen/client-preset-swc-plugin',
        { artifactDirectory: './src/types/graphql/', gqlTagName: 'gql' },
      ],
    ],
  },

  async headers() {
    return await new Promise((res) =>
      res([
        {
          source: '/*',
          headers: [
            {
              key: 'x-locale-date-time',
              value: new Date().toLocaleDateString(),
            },
          ],
        },
      ])
    );
  },
};
