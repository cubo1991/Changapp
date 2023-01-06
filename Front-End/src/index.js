import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react"
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from "./store/index"
import ScrollToTop from './ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-izk3hxpk80q83gn7.us.auth0.com"
          clientId="rrXxxpzPgmEw18H2cTV8S1NjAj0lih4u"
          redirectUri={window.location.origin}
        >
          <ScrollToTop/>
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
