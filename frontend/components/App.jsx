import React from 'react';
import SessionFormContainer from './session/session_form_container'
import signUpFormContainer from './signup/signup_form_container'
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import CitiesContainer from './'

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="main-content">
      <Route path="/hosting" component={CitiesContainer} />
      <AuthRoute path="/signIn" component={SessionFormContainer} />
      <AuthRoute path="/signUp" component={signUpFormContainer} />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
)

export default App;
