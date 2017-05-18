import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const signedInNav = (signOut, signedIn) => {
  if (signedIn) {
    return (
      <header className="main-nav">
        <nav className="left-nav">
          <Link to="/"><img className="logo" src="assets/logo-navbar.png" alt="TWD" /></Link>
        </nav>
        <nav className="right-nav">
          <button className="sign-out" onClick={signOut}>Sign Out</button>
        </nav>
      </header>
    )
  }
}

const signedOutNav = (signedIn) => {
  if (!signedIn) {
    return (
      <header className="main-nav">
        <nav className="left-nav">
            <Link to="/"><img src="assets/logo-navbar.png" alt="TWD" /></Link>
        </nav>
        <nav className="right-nav">
          <NavLink to="/signIn">Sign In</NavLink>
          <NavLink to="/signUp">Sign Up</NavLink>
        </nav>
      </header>
    )
  }
}

const Navbar = ({ signedIn, signOut }) => (
  (signedIn) ? signedInNav(signOut, signedIn) : signedOutNav(signedIn)
)

export default Navbar;
