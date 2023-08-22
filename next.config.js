/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  swcMinify: true,

  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },

  images: {
    domains: ['media.graphassets.com', 'drive.google.com', 'photos.google.com'],
    formats: ['image/webp', 'image/avif'],
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
};

// async headers() {
//   return await Promise.resolve([
//     {
//       source: '/fonts/Birdman/Birdman.ttf',
//       headers: [
//         {
//           key: 'Cache-Control',
//           value: 'public, max-age=31536000, immutable',
//         },
//       ],
//     },
//     {
//       source: '/fonts/Oxanium/Oxanium.ttf',
//       headers: [
//         {
//           key: 'Cache-Control',
//           value: 'public, max-age=31536000, immutable',
//         },
//       ],
//     },
//     {
//       source: '/fonts/MonocraftNF/Monocraft-nerd-fonts-patched.ttf',
//       headers: [
//         {
//           key: 'Cache-Control',
//           value: 'public, max-age=31536000, immutable',
//         },
//       ],
//     },
//   ]);
//  },
