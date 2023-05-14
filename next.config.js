/** @type {import('next').NextConfig} */
export default {
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
      cssProp: true,
    },
  },

  eslint: {
    dirs: [
      'src/pages/**/*.{tsx,ts}',
      'src/components/**/*.{tsx,ts}',
      'src/hooks/**/*.ts',
      'src/context/**/*.tsx',
      'src/utils/*.ts',
      'src/types/**/*.ts',
    ],
  },

  experimental: {
    swcPlugins: [
      [
        '@graphql-codegen/client-preset-swc-plugin',
        { artifactDirectory: './src/pages/api/graphql', gqlTagName: 'graphql' },
      ],
    ],
  },

  // async headers() {
  //   return await new Promise((res) =>
  //     res([
  //       {
  //         source: '/*',
  //         headers: [
  //           {
  //             key: 'x-origin-locale-datetime',
  //             value: new Date().toLocaleDateString(),
  //           },
  //         ],
  //       },
  //     ])
  //   );
  // },
};
