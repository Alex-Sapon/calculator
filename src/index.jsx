import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@components/app';
import { ErrorBoundary } from '@components/errorBoundary';
import { store } from '@store';
import { GlobalStyles } from '@styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <GlobalStyles/>
        <App/>
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
);
