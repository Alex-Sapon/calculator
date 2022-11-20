import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@components/app';
import { store } from '@store';
import { GlobalStyles } from '@styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles/>
      <App/>
    </BrowserRouter>
  </Provider>,
);
