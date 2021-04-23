import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
  //mount component lên DOM vs reactDom.render()
  // cú pháp X,document.getElementById('root') tức là mount cái X vào trong element có id là root, có thể thay thế X bằng bất cứ cái gì
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
