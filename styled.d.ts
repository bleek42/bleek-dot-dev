import { NextFont, NextFontWithVariable } from 'next/dist/compiled/@next/font';
import 'styled-components';

declare module 'styled-components' {
  interface CommonColors {
    readonly black: string | 'rgb(0, 0, 0)';
    readonly white: string | 'rgb(255, 255, 255)';
  }

  interface Colors extends CommonColors {
    readonly red: string;
    readonly orange: string;
    readonly blue: string;
    readonly cyan: string;
    readonly green: string;
    readonly drab: string;
    readonly neon: string;
    readonly steel: string;
    readonly tan: string;
    readonly gray: string;
    readonly teal: string;
    readonly yellow: string;
    readonly linear?: string;
    readonly radial?: string;
  }

  type ColorPalettes = 'primary' | 'secondary' | 'tertiary' | 'common';
  type Fonts =
    | 'Birdman'
    | 'Oxanium'
    | 'MonocraftNF'
    | 'Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Verdana, Geneva, Tahoma, Arial, sans-serif, monospace'
    | 'Verdana, Geneva, Tahoma, Arial, sans-serif, system-ui, -apple-system, BlinkMacSystemFont'
    | '"Times New Roman", Times, Haettenschweiler, monospace, system-ui, -apple-system, BlinkMacSystemFont';

  interface Breakpoints {
    readonly phone: '480px';
    readonly smallTab: '640px';
    readonly laptop: '768px';
    readonly fullDisplay: '1024px';
    readonly largeDisplay: '1280px';
  }

  export interface DefaultTheme {
    readonly name: 'Default' | string;
    readonly borderRadius: string;
    readonly breakpoints: Breakpoints;
    readonly fonts: ReadonlyArray<Fonts>;

    palette: {
      common: CommonColors;
      primary: Colors;
      secondary: Colors;
      tertiary: Colors;
    };
  }
}
