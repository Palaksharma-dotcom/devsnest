import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import store from "./store"
import { Provider } from 'react-redux';
import './style.css'
ReactDOM.render(
  <Provider store={store}> 
    <App />
    </Provider>,
  document.getElementById('root')
);
