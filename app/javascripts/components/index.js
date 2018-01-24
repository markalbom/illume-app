/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './App.css';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(<App />, container);
});
