import './Title.css';
import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
	return (
		<section className="logo__title" >
			<div className="logo__header">
				<h1 className="logo__name">
					Michael&nbsp;Whyte
				</h1>
			</div>
			<div className="logo__subheader">
				<p className="logo__text">
					web developer
				</p>
			</div>
		</section>
	);
}

Title.propTypes = {
    isShown: PropTypes.bool
}

export default Title;
