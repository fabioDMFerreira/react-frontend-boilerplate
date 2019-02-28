import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Main';

import './App.css';
import LanguagesToggle from 'containers/LanguagesToggle';

const App = () => (
	<div id="root">
		<React.Fragment>
			<div id="languages-container">
				<LanguagesToggle />
			</div>
			<Router>
				<Main />
			</Router>
		</React.Fragment>
	</div>
);

export default App;
