
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';

import {Router} from 'react-router-dom' 
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import history from './helpers/history.js'

const loggerMiddleware = createLogger()
 
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

// First check if the authorization header is valid

		//When all the fetching is done then render the app.
ReactDOM.render(
<Provider store={store}>
	<Router history={history}>
		<App />
	</Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();


