import type { CSSProp } from "styled-components";
import Theme from './theme';

type ThemeType = typeof Theme;

declare module "styled-components" {
 export interface DefaultTheme extends ThemeType {
  title: string,

    colors: {
      primary: string,
      secondary: string,
      background: string,
      text_white: string,
      text_black: string,
    },
    sizes: {
      xxxs: string,
      xxs: string,
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string,
      xxxl: string,
      yl: string,
      yyl: string,
      yyyl: string,
      zl: string,
      zzl: string,
      zzzl: string,
    }
 }
  
}

declare module "react" {
 interface DOMAttributes {
   css?: CSSProp;
 }
}



// import 'styled-components';
// import Theme from './theme';
// import type { CSSProp } from 'styled-components';
// type ThemeType = typeof Theme;

// declare module 'styled-components' {
//   export interface DefaultTheme extends ThemeType {
    
//   }
// }