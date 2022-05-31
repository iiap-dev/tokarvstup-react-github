import { createGlobalStyle } from 'styled-components';
import { appTheme } from '@ntm-package/theme';
import './fonts/fonts.css';

const { colors, size: { fontSize } } = appTheme;

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
    overflow-x: hidden;
    color: ${colors.textColor.primary};
    background: ${colors.background.secondary};
  }

  a, a:visited, a:hover {
    text-decoration: none;
    font-weight: 600;
  }

  button, .button {
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    border: 0;
    cursor: pointer;
    padding: 15px 12px;
    text-transform: uppercase;
    color: ${colors.textColor.secondary};
    background: ${colors.background.accent};
    
    :hover {
      opacity: .7;
    }
    
    @media (min-width: 768px) {
      font-size: ${fontSize.button.tablet};
    }

    @media (min-width: 1024px) {
      font-size: ${fontSize.button.laptop};
    }

    @media (min-width: 1440px) {
      font-size: ${fontSize.button.laptopLarge};
    }
  }

  h1 {
    font-size: ${fontSize.h1.mobile};
    margin: 30px 0;
    line-height: 60px;
    color: ${colors.textColor.secondary};

    @media (min-width: 1024px) {
      font-size: ${fontSize.h1.desktop};
    }
  }

  h2 {
    font-size: ${fontSize.h2.mobile};
    margin: 20px 0;
    line-height: 30px;
    color: ${colors.textColor.secondary};

    @media (min-width: 1024px) {
    font-size: ${fontSize.h2.desktop};
  }
  }
  
  h3 {
    font-size: ${fontSize.h3.mobile};

    @media (min-width: 1024px) {
      font-size: ${fontSize.h3.desktop};
    }
  }
  
  p {
    font-size: 15px;
    margin-bottom: 30px;
    line-height: 1.8em;
  }
`;
