import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocalizeProvider } from 'react-localize-redux';

import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

import store from './store';
import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<LocalizeProvider store={store}>
			<Router>
				<App />
			</Router>
		</LocalizeProvider>
	</Provider >
	, document.getElementById('root'),
);
registerServiceWorker();
