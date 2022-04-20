import { createGlobalStyle } from 'styled-components';
import { appTheme } from '@ntm-package/theme';
import './fonts/fonts.css';

const { colors } = appTheme;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  
  body {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: ${colors.basicColors.BLACK};
    background: ${colors.blueShades.DARK_BLUE};
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  :root {
      font-size: 14px;
    
    @media (min-width: 800px) {
      font-size: 16px;
    }
    
    @media (min-width: 1200px) {
      font-size: 16px;
    }
  }
`;
