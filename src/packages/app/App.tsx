import React, { memo, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';
import { appTheme } from '@ntm-package/theme';
import { appActions } from './store';
import { StyledLayout } from '../layouts/StyledLayout';
import { appSelector } from './selectors';
import { useWindowSize } from '../utils/useWindowSize';

const App: React.FC = (memo(({ children }) => {
  const { isReady } = useSelector(appSelector);

  const dispatch = useDispatch();

  useMount(() => {
    dispatch(appActions.startInit());
  })

  const handleSetSize = useCallback((payload) => dispatch(appActions.setWindowSize(payload)), []);
  useWindowSize(handleSetSize);

  const theme = appTheme

  if (!isReady) {
    return <div>Wait...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        { children }
      </StyledLayout>
    </ThemeProvider>
  )
}));

export default App;
