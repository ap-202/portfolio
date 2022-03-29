import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './Landing.js';
import NavBar from './NavBar.js';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);

