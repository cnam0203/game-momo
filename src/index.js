import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { Router } from "react-router";
import history from './history';
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState();

let store = createStore(reducers, persistedState)

store.subscribe(throttle(() => {
  saveState({
      isSignIn: store.getState().isSignIn,
      userInfo: store.getState().userInfo,
      room: store.getState().room,
  })
}, 1000))


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
