import React from 'react';
import ReactDom from 'react-dom';
import { signup, login, logout } from './util/session_api_util'
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDom.render(<h1>Hello there</h1>, root);
});

window.signup = signup;
window.login = login;
window.logout = logout;
