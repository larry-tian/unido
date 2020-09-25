// React 
import React from 'react';
import ReactDOM from 'react-dom';

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import 'firebase/database';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import App from './App';

import * as serviceWorker from './serviceWorker';

// Firebase Configuration 
var firebaseConfig = {
  apiKey: "AIzaSyB50giTBGpRqVAG4AtYdE7xbWUrCXOLR8k",
  authDomain: "animal-forest-info340.firebaseapp.com",
  databaseURL: "https://animal-forest-info340.firebaseio.com",
  projectId: "animal-forest-info340",
  storageBucket: "animal-forest-info340.appspot.com",
  messagingSenderId: "1062937607745",
  appId: "1:1062937607745:web:07d76a646ffab4c59bd0c0",
  measurementId: "G-E2DSQB0J8N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
