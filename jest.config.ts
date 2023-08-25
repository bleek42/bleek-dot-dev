import { type Config } from 'jest';
import nextJest from 'next/jest';

const createNextJestConfig = nextJest({
  // * Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// * Add any custom config to be passed to Jest
// & Add more setup options before each test is run
const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.test.tsx'],
  moduleNameMapper: {
    '^@/interfaces/(.*)$': 'src/interfaces/$1',
    '^@/graphql/(.*)$': 'src/graphql/$1',
    '^@/components/(.*)$': 'src/components/$1',
    '^@/hooks/(.*)$': 'src/hooks/$1',
    '^@/pages/(.*)$': 'src/pages/$1',
    '^@/lib/(.*)$': 'src/pages/lib/$1',
  },
  testPathIgnorePatterns: [
    'node_modules/',
    '.next/',
    'src/appdir/',
    'src/components/common/styles/',
  ],
};

// ! createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createNextJestConfig(config);
