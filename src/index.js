import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from 'components/config/colors';

import reportWebVitals from './reportWebVitals';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'styles/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
