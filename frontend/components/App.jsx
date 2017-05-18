import React from 'react';
import SessionFormContainer from './session/session_form_container'
import signUpFormContainer from './signUp/signUp_form_container'
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="main-content">
      <AuthRoute path="/signIn" component={SessionFormContainer} />
      <AuthRoute path="/signUp" component={signUpFormContainer} />
    </div>
  </div>
)

export default App;
