declare namespace NodeJS {
  type DomainName =
    | 'bleek.dev'
    | 'https://bleek.dev'
    | 'www.bleek.dev'
    | 'https://www.bleek.dev';

  type NodeJSEnv = 'development' | 'production' | 'test';
  export interface ProcessEnv {
    NODE_ENV: NodeJSEnv;
    NODE_PATH?: string | unknown;
    // PORT?: number | 3000;
    // HOST?: 'http://localhost' | 'http://127.0.0.1' | string | unknown;
    HYGRAPH_API_URL: string | WithList<string>;
    HYGRAPH_API_AUTH: string;

    HYGRAPH_CDN_URL: string | WithList<string>;
    HYGRAPH_CDN_AUTH: string;
    NEXT_PUBLIC_DOMAIN_NAME?: DomainName;
  }
}
