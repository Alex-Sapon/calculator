import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@components/app';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyles/>
    <App/>
  </BrowserRouter>
)
