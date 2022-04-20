import React from 'react';

import { GlobalStyle } from './GlobalStyle';

export const StyledLayout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    { children }
  </>
);
