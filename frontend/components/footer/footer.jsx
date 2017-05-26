import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">
    <div className="nav-route-links">
      <NavLink className="nav-routes" to="/cities">CITIES</NavLink>
      <NavLink className="nav-routes" to="/">HOME</NavLink>
    </div>
    <div className="brief-about">
      <p className="footer-p">
        Steep is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.
      </p>
      <p className="footer-p">
        We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.
      </p>
    </div>
  </div>
)

export default Footer;
