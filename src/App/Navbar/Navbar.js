import React, { Component } from 'react';
import { Navbar as NavbarComponent, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownToggle, Container } from 'reactstrap';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import {
	HOME,
	AUTHENTICATION,
} from 'locale/consts';

import Translate from 'containers/Translate';


import './Navbar.css';
import Logout from './Logout';
import Header from 'App/Header';

class Navbar extends Component {

	render() {
		return (
			<NavbarComponent id="navbar" color="primary" dark expand="md">
				<Container>
					<Header />
					<Nav className="ml-auto" navbar vertical={false}>
						<NavItem>
							<NavLink tag={RRNavLink} exact to="/home">
								<Translate id={HOME} />
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RRNavLink} to="/login">
								<Translate id={AUTHENTICATION} />
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								<FontAwesomeIcon icon={faCog} />
							</DropdownToggle>
							<DropdownMenu right>
								<Logout />
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Container>
			</NavbarComponent>
		);
	}
}

export default withRouter(Navbar);
