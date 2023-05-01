import type { SchemaPointer, WithList } from 'graphql-config';

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PORT: number;
    readonly HYGRAPH_READONLY_API_URL?: SchemaPointer | WithList<string> | string | null | unknown;
    readonly HYGRAPH_READONLY_API_KEY?: string | null;

    readonly NEXT_PUBLIC_DOMAIN_NAME:
      | 'bleek.dev'
      | 'https://bleek.dev'
      | 'www.bleek.dev'
      | 'https://www.bleek.dev';
  }
}
