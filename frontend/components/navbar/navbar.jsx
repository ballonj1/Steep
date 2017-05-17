import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

const signedInNav = (signOut, signedIn) => {
  if (signedIn) {
    return (
      <nav>
        <button onClick={signOut}>Sign Out</button>
      </nav>
    )
  }
}

const signedOutNav = (signedIn) => {
  if (!signedIn) {
    return (
      <nav>
        <NavLink to="/signIn">Sign In</NavLink>
        <NavLink to="/signUp">Sign Up</NavLink>
      </nav>
    )
  }
}

const Navbar = ({ signedIn, signOut }) => (
  (signedIn) ? signedInNav(signOut, signedIn) : signedOutNav(signedIn)
)

export default Navbar;
