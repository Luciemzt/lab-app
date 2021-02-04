import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userEvent from '@testing-library/user-event';

const lunes = [
  'squat',
  'push-up',
  'abdominales'
]

const description = "Hacer desporte es bueno! "

const contact = [
  'info',
  'contact us'
]

ReactDOM.render(
  <React.StrictMode>
    <App title= "ejercicio del dia" lunes= {lunes} description= {description} contact = {contact}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
