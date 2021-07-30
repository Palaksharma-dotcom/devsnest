import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <p>There are 4 counter component instances that each manage their own state.</p>
    <div className="board">

      <App />
      <App />
      <App />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

