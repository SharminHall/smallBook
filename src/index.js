import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './views/Comment/Comment'

import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={App} ></Route>
    <Route path="/comment" component={Comment} ></Route>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
