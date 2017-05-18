import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const signedInNav = (signOut, signedIn) => {
  if (signedIn) {
    return (
      <header className="main-nav">
        <nav className="left-nav">
          <Link className="logo-container" to="/"><img className="logo" src="assets/logo-navbar.png" alt="TWD" /></Link>
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
          <NavLink className="nav-routes" to="/signIn">SIGN IN</NavLink>
          <NavLink className="nav-routes" to="/signUp">SIGN UP</NavLink>
        </nav>
      </header>
    )
  }
}

const Navbar = ({ signedIn, signOut }) => (
  (signedIn) ? signedInNav(signOut, signedIn) : signedOutNav(signedIn)
)

export default Navbar;
