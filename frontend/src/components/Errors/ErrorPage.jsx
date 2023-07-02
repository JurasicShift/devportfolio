import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import PropTypes from 'prop-types';

const NotFound = () => {
	return (
		<div className="error">
			<div className="error__div">
				<h1>ERROR</h1>
				<h2 className="error__title">404 Page Not Found!</h2>
				<p className="error__text">
					Return to the <Link to="/">Homepage</Link>
				</p>
			</div>
		</div>
	);
};

const Error = ({ message, fn }) => {
	return (
		<div className="error">
			<div className="error__div">
				<h1>ERROR</h1>
				<p>{message}</p>
				<p className="error__text">
					Return to the{' '}
					<a href="/" onClick={fn}>
						Homepage
					</a>
				</p>
			</div>
		</div>
	);
};

Error.propTypes = {
	message: PropTypes.string,
	fn: PropTypes.func
};

export { NotFound, Error };
