import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env, // ! readonly HyGraph Endpoint for high-performance
};
