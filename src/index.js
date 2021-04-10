import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/app.jsx';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const rootEL = document.getElementById('root');

function Render() {
  ReactDOM.render(
    <App />,
    rootEL
);
}

if (module.hot){
  module.hot.accept('./app/layout/app.jsx', function(){
    setTimeout(Render);
  })
}

Render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
