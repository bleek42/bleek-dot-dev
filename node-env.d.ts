declare namespace NodeJS {
  export interface ProcessEnv {
     NODE_ENV: 'development' | 'production' | 'test';
    NODE_PATH?: string;
    PORT?: 3000 | 8000 | number;
    HOST?: 'http://localhost' | 'http://127.0.0.1' | string | null;
     PORT: number;
     HYGRAPH_API_AUTH_TOKEN: string | null;
     HYGRAPH_API_BASE_URL:
      | string
      | WithList<string>
      | unknown
      | null;

    NEXT_PUBLIC_DOMAIN_NAME:
      | 'bleek.dev'
      | 'https://bleek.dev'
      | 'www.bleek.dev'
      | 'https://www.bleek.dev';

    NEXT_PUBLIC_HYGRAPH_CDN_AUTH_TOKEN: string | unknown;
     NEXT_PUBLIC_HYGRAPH_CDN_BASE_URL:
      | string
      | WithList<string>
      | unknown
      | null;
  }
}
