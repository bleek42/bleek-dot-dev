import type { SchemaPointer, WithList } from 'graphql-config';

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    NODE_PATH?: string;
    PORT?: 3000 | 8000 | number;
    HOST?: 'http://localhost' | 'http://127.0.0.1' | string | null;
    readonly PORT: number;
    readonly HYGRAPH_API_AUTH_TOKEN: string | null;
    readonly HYGRAPH_API_BASE_URL:
      | SchemaPointer
      | WithList<string>
      | string
      | null
      | unknown;

    NEXT_PUBLIC_DOMAIN_NAME:
      | 'bleek.dev'
      | 'https://bleek.dev'
      | 'www.bleek.dev'
      | 'https://www.bleek.dev';

    readonly NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN: string | unknown;
    readonly NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL:
      | string
      | SchemaPointer
      | WithList<SchemaPointer | string>
      | null;
  }
}
