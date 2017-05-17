import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="signIn-signUp">
    <Link to="/signIn">signIn</Link>
    &nbsp;or&nbsp;
    <Link to="/signUp">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, signOut) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
    <button className="header-button" onClick={signOut}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, signOut }) => (
  currentUser ? personalGreeting(currentUser, signOut) : sessionLinks()
);

export default Greeting;
