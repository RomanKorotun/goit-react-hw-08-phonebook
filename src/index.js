import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { App } from 'App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

const theme = {
  bgColorSection: '#a9a9a9',
  radius: '5px',
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
