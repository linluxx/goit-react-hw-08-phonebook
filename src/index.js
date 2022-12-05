import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

import { App } from 'components/App';
import { theme } from './constants/theme';
import { store, persistor } from 'redux/store';
import { baseStyles } from 'constants/globalStyles';

const GlobalStyles = createGlobalStyle` ${baseStyles} ${normalize}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
