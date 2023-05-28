import React from 'react';
import './AboutPhoto.css';
import useViewport from '../hooks/useViewport';
import PropTypes from 'prop-types';

const AboutPhoto = (props) => {
	const { width } = useViewport();
	const breakpoint = 1200;

	return (
		<div className={width < breakpoint ? 'aboutme__img aboutme__img-animation' : 'aboutme__img'}>
			 
			<img
				style={width >= breakpoint ? {height: props.height, width: props.width} : null}
				src={require('../imgs/profilepic.jpg')}
				alt="Michael Whyte profile"
				className="aboutme__img-img"
			/>
		</div>
	);
};

AboutPhoto.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number
}

export default AboutPhoto;
