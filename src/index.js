import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  bgColors: {
    bgColorSection: '#a9a9a9',
    bgColorButton: '#4d5ae5',
    activeBgColor: '#404bbf',
  },
  colors: {
    secondaryColor: '#ffffff',
    primaryColor: '#454545',
    notFoundLinkcolor: '#0000ff',
    errorColor: '#ff0000',
    borderColorInput: '#000000',
    activeColorLink: '#000000',
  },
  boxShadowColor: '#454545',
  radius: '5px',
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
