import React from 'react';
import sessionFormContainer from './session/session_form_container'
import signUpFormContainer from './signup/signup_form_container'
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import citiesContainer from './cities/cities_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="main-content">

      <AuthRoute path="/signIn" component={sessionFormContainer} />
      <AuthRoute path="/signUp" component={signUpFormContainer} />
      <Route path="/cities" component={citiesContainer} />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
)

export default App;
