declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PORT: number;
    readonly HYGRAPH_READONLY_API_URL: URL;
    readonly HYGRAPH_READONLY_API_KEY: string;

    readonly NEXT_PUBLIC_DOMAIN_NAME:
      | 'bleek.dev'
      | 'https://bleek.dev'
      | 'www.bleek.dev'
      | 'https://www.bleek.dev';
  }
}
