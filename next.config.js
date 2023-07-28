/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  swcMinify: true,
  cleanDistDir: true,
  outputFileTracing: true,

  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  compiler: {
    styledComponents: {
      displayName: true,
      pure: true,
      ssr: true,
      minify: true,
      cssProp: true,
    },
  },

  eslint: {
    dirs: [
      'src/pages/**/*.{tsx,ts}',
      'src/components/**/*.{tsx,ts}',
      'src/hooks/**/*.{tsx,ts}',
      'src/context/**/*.{tsx,ts}',
      'src/utils/*.{tsx,ts}',
      'src/types/**/*.{tsx,ts}',
    ],
  },
  experimental: {
    // appDir: false,
  },

};


  // // async headers() {
  // //   return await new Promise((res) =>
  // //     res([
  // //       {
  // //         source: '/*',
  // //         headers: [
  // //           {
  // //             key: 'x-origin-locale-datetime',
  // //             value: new Date().toLocaleDateString(),
  // //           },
  // //         ],
  // //       },
  // //     ])
  // //   );
  // // },
