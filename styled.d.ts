import 'styled-components';

declare module 'styled-components' {
  export interface CommonColors {
    black?: string;
    white?: string;
  }

  export interface Colors extends CommonColors {
    red: string;
    orange: string;
    blue: string;
    cyan: string;
    green: string;
    drab: string;
    steel: string;
    tan: string;
    gray: string;
    teal: string;
    neon: string;
    yellow: string;
    linear?: string;
    radial?: string;
  }

  export interface DefaultTheme {
    name: 'Default' | string;
    fonts: string[] | string;
    borderRadius: string;
    palette: {
      common: CommonColors;

      primary: Colors;
      secondary: Colors;
      tertiary: Colors;
    };
  }
}
