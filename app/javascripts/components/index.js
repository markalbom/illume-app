/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';

// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.body.appendChild(document.createElement('div'));
//   render(<App />, container);

ReactDOM.render(<App />, document.querySelector('#container'));

