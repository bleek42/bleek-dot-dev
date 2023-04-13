import 'styled-components';

interface Colors {
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

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'DefaultTheme' | string;
    fonts: string | 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif';
    borderRadius: string;
    bodyColor: string;
    textColor: string;
    palette: {
      common: {
        black: string;
        white: string;
      };

      primary: Colors;
      secondary: Colors;
      ternary: Colors;
    };
  }
}
