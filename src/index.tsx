import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '@ntm-package/app';
import configureAppStore from '@ntm-package/app/configureStore';

import { ContentWrapper } from './sections/ContentWrapper';

const store = configureAppStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <ContentWrapper />
      </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
