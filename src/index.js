import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore')

// Initialize Firebase
firebase.initializeApp({
	apiKey: process.env.REACT_APP_Firebase_apiKey,
	authDomain: process.env.REACT_APP_Firebase_authDomain,
	databaseURL: process.env.REACT_APP_Firebase_databaseURL,
	projectId: process.env.REACT_APP_Firebase_projectId,
	storageBucket: process.env.REACT_APP_Firebase_storageBucket,
	messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId,
	appId: process.env.REACT_APP_Firebase_appId
});

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
