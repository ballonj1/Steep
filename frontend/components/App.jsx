import React from 'react';
import sessionFormContainer from './session/session_form_container'
import signUpFormContainer from './signup/signup_form_container'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import CitiesIndexContainer from './cities/cities_index_container';
import CitiesDetailContainer from './cities/cities_detail_container';
import HostFormContainer from './host/host_form_container';
import Dashboard from './dashboard_show/dashboard';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="main-content">
      <Switch>
        <AuthRoute path="/signIn" component={sessionFormContainer} />
        <AuthRoute path="/signUp" component={signUpFormContainer} />
        <Route path="/cities/:id/hosting" component={HostFormContainer} />
        <Route path="/cities/:id" component={CitiesDetailContainer} />
        <Route path="/cities" component={CitiesIndexContainer} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
)

export default App;
