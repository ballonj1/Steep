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
          <button className="nav-routes" onClick={signOut}>SIGN OUT</button>
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
          <div>
            <NavLink className="nav-routes" to="/signIn">SIGN IN</NavLink>
          </div>
          <div className="sign-up-style">
            <NavLink className="sign-up-nav-text nav-routes" to="/signUp">SIGN UP</NavLink>
          </div>
        </nav>
      </header>
    )
  }
}

const Navbar = ({ signedIn, signOut }) => (
  (signedIn) ? signedInNav(signOut, signedIn) : signedOutNav(signedIn)
)

export default Navbar;
