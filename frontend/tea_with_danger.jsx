import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDom.render(<h1>Hello there</h1>, root);
});

window.signup = signup;
window.login = login;
window.logout = logout;
