import React, { useEffect, useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Background.css';

function Background(props) {
	
	let [locationBool, setLocationBool] = useState(false);
	let [zoom, setZoom] = useState(false);

	let background__animate = {
		animation: 'bgSlide 1s 0.25s',
	};
	
	const prefix = '/michaelwhytewebdev/';
	const resolvedPath = useResolvedPath(prefix);

	useEffect(() => {
		if (resolvedPath.pathname === prefix) {
			setLocationBool((locationBool = true));
			const timer = setTimeout(_ => {
				setZoom(true);
			}, 6000);
			return _ => clearTimeout(timer);
		}

		if (resolvedPath.pathname !== prefix) setZoom(true);
	});

	return (
		<>
			<div
				className={zoom ? 'background background__animate' : 'background'}
				style={locationBool ? background__animate : null}
			></div>
		</>
	);
}

Background.propTypes = {
	previousPath: PropTypes.string,
};

export default Background;
