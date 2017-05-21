import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchCity, fetchCities } from './actions/cities_action';
import { fetchEvents } from './util/events_util';

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
  const root = document.getElementById('root');
  ReactDom.render(<Root store={store} />, root);
});



window.fetchCity = fetchCity;
window.fetchCities = fetchCities;
