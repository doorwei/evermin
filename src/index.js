import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// Firebase App is always required and must be first
var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBQj90ic_PzH6QrQmbgE11hnHInf73HJyA",
  authDomain: "evermin-firebase.firebaseapp.com",
  databaseURL: "https://evermin-firebase.firebaseio.com",
  projectId: "evermin-firebase",
  storageBucket: "evermin-firebase.appspot.com",
  messagingSenderId: "132834061455"
};
firebase.initializeApp(config);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
