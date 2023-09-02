import { type Config } from 'jest';
import nextJest from 'next/jest';
import { styledRender } from './tests/utils/styedRender';

const createNextJestConfig = nextJest({
  // * Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// * Add any custom config to be passed to Jest
// & Add more setup options before each test is run
const config = async (): Promise<Config> => ({
  preset: 'ts-jest',
  verbose: true,
  injectGlobals: true,
  globalSetup: './tests/setupTests.ts',
  globals: {
    styledRender,
  },
  moduleDirectories: ['node_modules', 'src'],

  // testEnvironmentOptions: {},
  testEnvironment: 'jest-environment-jsdom',
  watchPathIgnorePatterns: ['<rootDir>/tests/pages/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleNameMapper: {
    '^@/interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@/graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/lib/(.*)$': '<rootDir>/src/pages/lib/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/src/app/',
  ],
});

// ! createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createNextJestConfig(config);
