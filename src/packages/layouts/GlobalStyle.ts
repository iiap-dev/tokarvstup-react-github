import { createGlobalStyle } from 'styled-components';
import { appTheme } from '@ntm-package/theme';
import './fonts/fonts.css';

const { colors } = appTheme;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: ${colors.basicColors.BLACK};
    background: ${colors.blueShades.DARK_BLUE};
  }

  a, a:visited, a:hover {
    text-decoration: none;
  }
  
  //:root {
  //    font-size: 14px;
  //
  //  @media (min-width: 800px) {
  //    font-size: 16px;
  //  }
  //
  //  @media (min-width: 1200px) {
  //    font-size: 16px;
  //  }
  //}
`;
