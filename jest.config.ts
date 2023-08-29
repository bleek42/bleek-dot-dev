import { type Config } from 'jest';
import nextJest from 'next/jest';

const createNextJestConfig = nextJest({
  // * Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// * Add any custom config to be passed to Jest
// & Add more setup options before each test is run
const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  injectGlobals: true,
  // testEnvironmentOptions: {},
  testEnvironment: 'jest-environment-jsdom',
  watchPathIgnorePatterns: ['<rootDir>/pages/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.tsx'],
  moduleNameMapper: {
    '^@/interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@/graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/lib/(.*)$': '<rootDir>/src/pages/lib/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};

// ! createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createNextJestConfig(config);
