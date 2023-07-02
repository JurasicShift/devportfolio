import React from 'react';
import './HomeStars.css';
import PropTypes from 'prop-types';

const HomeStars = props => {
	return (
		<section className="star__section">
			<span className={props.shootingStars ? "star" : null}></span>
			<span className={props.shootingStars ? "star" : null}></span>
		</section>
	);
};

HomeStars.propTypes = {
	shootingStars: PropTypes.bool,
};

export default HomeStars;
