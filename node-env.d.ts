declare namespace NodeJS {
  type DomainName =
    | 'bleek.dev'
    | 'https://bleek.dev'
    | 'www.bleek.dev'
    | 'https://www.bleek.dev';

  // type NodeJSEnv = ;
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NODE_PATH?: string | unknown;
    PORT?: number | 3000;
    HOST?: 'http://localhost' | 'http://127.0.0.1' | string | unknown;
    HYGRAPH_API_URL: string | WithList<string>;
    HYGRAPH_API_AUTH: string;
    GH_AUTH: string;
    GH_JWT: string;

    HYGRAPH_CDN_URL: string | WithList<string>;
    HYGRAPH_CDN_AUTH: string;
    NEXT_PUBLIC_DOMAIN_NAME?: DomainName;
  }
}
