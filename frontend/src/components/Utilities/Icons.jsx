import './Icons.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


function Icons(props) {
	let location = useLocation();
	let path = location.pathname;

	const iconsRelative = {
		position: "relative"
	}

	const iconsWidth = {
		width: "100vw"
	}

	const gitAdjust = {
		margin: "0px",
		padding: "10px 10px 10px 5px"
	}

	const linkAdjust = {
		top: "4px",
		marginLeft: "5px"
	}

	return <section className="icons__section" style={props.relative ? iconsRelative : iconsWidth}>
			<div className="icons__Linked">
				<a
					href="https://linkedin.com/in/michael-whyte-web-dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require('../../imgs/linked.svg').default}
						alt="LinkedIn Icon"
						style={path.includes('/about') && props.id ? linkAdjust : null}
					></img>
				</a>
			</div>
			<div className="icons__Git" style={path.includes('/about') && props.id ? gitAdjust : null}>
				<a
					href="https://github.com/JurasicShift?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require('../../imgs/git.svg').default}
						alt="Git Hub Icon"
					></img>
				</a>
			</div>
		</section>
}

 Icons.propTypes = {
	relative: PropTypes.bool,
	id: PropTypes.string
 }

export default Icons;
