import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


function startApp() {

    ReactDOM.render(<App />, document.getElementById('root'));
}
if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
} else {
    startApp();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
