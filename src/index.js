import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import * as serviceWorker from './serviceWorker';
import App from './App';
import messageSlice from './store';
import './config';

/* ASSETS */
import './assets/index.css';
import './assets/css/main.css';

const store = configureStore({
  reducer: messageSlice
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
