import type { SchemaPointer, WithList } from 'graphql-config';

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PORT: number;
    readonly HYGRAPH_API_KEY?: string | null;
    readonly HYGRAPH_API_URL: SchemaPointer | WithList<string> | string | null | unknown;

    readonly NEXT_PUBLIC_DOMAIN_NAME:
      | 'bleek.dev'
      | 'https://bleek.dev'
      | 'www.bleek.dev'
      | 'https://www.bleek.dev';

    readonly NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN?: string | unknown;
    readonly NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL?:
      | SchemaPointer
      | WithList<string>
      | string
      | null
      | unknown;
  }
}
