import React from 'react';
import { bool } from 'prop-types';
import Cookies from 'js-cookie';

import { LOGIN } from 'locale/consts';
import Translate from 'containers/Translate';

import LoginForm from 'containers/LoginForm';

import './Authentication.css';

const Authentication = ({ isLoggedIn }) =>{
	console.log('auth',Cookies.get('auth'));
	return (
		<div id="authentication" className="text-center">
			<div className="container">
				{
					(
						() => {
							if (!isLoggedIn) {
								return (
									<React.Fragment>
										<h2><Translate id={LOGIN} /></h2>
										<LoginForm />
										{/* <hr />
										<FacebookLogin />
										<GoogleLogin /> */}
									</React.Fragment>);
							}

							return;
						}
					)()
				}
			</div>
		</div>
	);
}



Authentication.propTypes = {
	isLoggedIn: bool,
};

Authentication.defaultProps = {
	isLoggedIn: false,
};

export default Authentication;
