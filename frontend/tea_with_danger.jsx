import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchCity, fetchCities } from './actions/cities_action';
import { fetchEvents } from './actions/events_actions';
import { joinEvent, leaveEvent, fetchJoins } from './actions/join_actions';
import { fetchHost } from './actions/host_actions';
import { updateUser } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchEvents = fetchEvents;
  const root = document.getElementById('root');
  ReactDom.render(<Root store={store} />, root);
});

window.updateUser = updateUser;
window.fetchHost = fetchHost;
window.fetchJoins = fetchJoins;
window.leaveEvent = leaveEvent;
window.joinEvent = joinEvent;
window.fetchCity = fetchCity;
window.fetchCities = fetchCities;
