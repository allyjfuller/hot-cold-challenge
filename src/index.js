import React from 'react';
import ReactDOM from 'react-dom';
// tell the app to use redux
import { Provider } from 'react-redux'
// tell the app which store is providing the state
import store from './store'

import './index.css';

import App from './components/app';

ReactDOM.render(
	// takes the prop store that equals to the store saying a redux store will be providing the state
	<Provider store={store}>
		<App />
  	</Provider>,
  	
  document.getElementById('root')
);