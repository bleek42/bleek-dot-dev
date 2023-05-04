import type { SchemaPointer, WithList } from 'graphql-config';

declare namespace NodeJS {
  export interface ProcessEnv {
    public readonly NODE_ENV: 'development' | 'production' | 'test';
    public readonly PORT: number;

    public readonly NEXT_PUBLIC_DOMAIN_NAME:
      | 'bleek.dev'
      | 'https://bleek.dev'
      | 'www.bleek.dev'
      | 'https://www.bleek.dev';

    public readonly NEXT_PUBLIC_HYGQL_READONLY_CDN_URL?: SchemaPointer | WithList<string> | string | null | unknown;
    public readonly NEXT_PUBLIC_HYGQL_READONLY_CDN_AUTH?: string | null;

    protected readonly HYGRAPH_API_URL: SchemaPointer | WithList<string> | string | null | unknown;
  }
}
