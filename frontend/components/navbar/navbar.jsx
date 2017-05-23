import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';


const signedInNav = (signOut, signedIn, session) => {
  if (signedIn && session.currentUser) {
    return (
      <header className="main-nav">
        <nav className="left-nav">
          <div className="left-nav-content">
            <Link className="logo-container" to="/"><img className="logo" src="http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495171568/logo-navbar_vkrcks.png" alt="TWD" /></Link>
          </div>
        </nav>
        <nav className="right-nav">
          <div className="right-nav-contents">
            {(session.currentUser && session.currentUser.city_name) ? (<div><NavLink className="nav-routes" to={`/cities/${session.currentUser.city_id}`}>{session.currentUser.city_name.toUpperCase()}</NavLink></div>) : ""}
            <div>
              <NavLink className="nav-routes" to="/hosting">HOSTING</NavLink>
            </div>
            <div>
              <NavLink className="nav-routes" to="/cities">CITIES</NavLink>
            </div>
            <button className="nav-emphasis nav-routes" onClick={signOut}>SIGN OUT</button>
          </div>
        </nav>
      </header>
    )
  }
}

const signedOutNav = (signedIn, session) => {
  if (!signedIn) {
    return (
      <header className="main-nav">
        <nav className="left-nav">
          <div className="left-nav-content">
            <Link to="/"><img src="http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495171568/logo-navbar_vkrcks.png" alt="TWD" /></Link>
          </div>
        </nav>
        <nav className="right-nav">
          <div className="right-nav-contents">
            <div>
              <NavLink className="nav-routes" to="/hosting">HOSTING</NavLink>
            </div>
            <div>
              <NavLink className="nav-routes" to="/cities">CITIES</NavLink>
            </div>
            <div>
              <NavLink className="nav-routes" to="/signIn">SIGN IN</NavLink>
            </div>
            <NavLink className="nav-emphasis nav-routes" to="/signUp">SIGN UP</NavLink>
          </div>
        </nav>
      </header>
    )
  }
}

const Navbar = ({ signedIn, signOut, session }) => (
  (signedIn) ? signedInNav(signOut, signedIn, session) : signedOutNav(signedIn, session)
)

export default Navbar;
