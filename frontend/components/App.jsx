import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container'
import SignupFormContainer from './signup/signup_form_container'
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Tea With Danger</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
)

export default App;
