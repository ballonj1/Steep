import React from 'react';
import sessionFormContainer from './session/session_form_container'
import signUpFormContainer from './signup/signup_form_container'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import CitiesIndexContainer from './cities/cities_index_container';
import CitiesDetailContainer from './cities/cities_detail_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="main-content">
      <AuthRoute path="/signIn" component={sessionFormContainer} />
      <AuthRoute path="/signUp" component={signUpFormContainer} />
      <Switch>
        <Route path="/cities/:id" component={CitiesDetailContainer} />
        <Route path="/cities" component={CitiesIndexContainer} />
      </Switch>
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
)

export default App;
