import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from '@components/app';
import { GlobalStyles } from '@styles/global';
import { Provider } from 'react-redux';
import { store } from '@store';
import { ErrorBoundary } from '@components/errorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Provider store={store}>
      <ErrorBoundary>
        <GlobalStyles/>
        <App/>
      </ErrorBoundary>
    </Provider>
  </HashRouter>
)
