import 'styled-components';

declare module 'styled-components' {
  export const fonts = [
    'Birdman',
    'Oxanium',
    'MonocraftNF',
    'Impact, Haettenschweiler, "Arial Narrow Bold", Arial, Helvetica, sans-serif',
  ] as const;

  export interface Colors {
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
    fonts: Fonts | string[] | string;
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };

      primary: Colors;
      secondary: Colors;
      tertiary: Colors;
    };
  }
}
