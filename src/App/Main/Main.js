import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'scenes/Home';
import Authentication from 'scenes/Authentication';
import NotFound from 'scenes/NotFound';

import './Main.css';
import Navbar from 'App/Navbar';

class Main extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<Switch id="main">
					<Route exact path="/home" component={Home} />
					<Route exact path="/login" component={Authentication} />
					<Route exact path="/not-found" component={NotFound} />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
};

export default Main;
