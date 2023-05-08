import React, { useState } from 'react';

import InfoSvg from './InfoSvg';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import  useViewport  from '../hooks/useViewport';
import './ProjectItem.css';
import Icons from './Icons';

//add onFocus and onBlur for mobile devices!!!

function ProjectItem(props) {

	const mappedObjs = props.projects.map((obj, idx) => {
		return {
			hoverState: false,
			currentId: idx,
		};
	});

	const [onHover, setOnHover] = useState(mappedObjs);
	const { width } = useViewport();
	const breakpoint = 1200;


	function hoverImg(num) {
		const projectsList = JSON.parse(JSON.stringify(onHover));
		const obj = projectsList[num];
		const value = obj.hoverState;
		obj['hoverState'] = !value;
		if(obj['hoverState'] === true) {
			projectsList.map((obj, idx) => {
			 if(idx === num) {
				return obj;
			 } else {
				obj['hoverState'] = false;
				return obj;
			 }
			})
		}
		setOnHover(projectsList);
	}

	const Items = props.projects.map((item, idx) => {
		let hoverStyle = {
			height: '100%',
			width: '100%',
			transform: 'scale(1)',
			transition: 'all .3s ease-in-out',
		};

		let hoverZoom = {
			height: '100%',
			width: '100%',
			transform: 'scale(1.3)',
			transition: 'all .3s ease-in-out',
		};
		let shiftStatic = {
			position: 'absolute',
			top: '210px',
			left: '0'
		}

		let shiftUp = {
			position: 'absolute',
			top: '180px',
			left: '0'
		}

		let marginAdd = {
			marginBottom: "100px"
		}

		return (
			<div
				key={idx}
				style={{
					position: 'relative',
					top: '0',
					left: '0',
					marginTop: '10px',
					marginBottom: '10px',
				}}
				onMouseEnter={() => {
					hoverImg(idx);
				}}
				onMouseLeave={() => {
					hoverImg(idx);
				}}
			>
				<div className="project__img">
					<img src={item.img} style={onHover[idx].hoverState === false ? hoverStyle : hoverZoom} alt={item.title} />
				</div>
				<div className="spacer"></div>
				<div className="project__description" style={onHover[idx].hoverState === false ? shiftStatic : shiftUp}>
					 <InfoSvg target={`${idx}`} />
					<div className="project__info">
						<div className="project__info--flex">
							<a href={item.url} target="_blank" rel="noopener noreferrer">
								<h3 className="project__z">{item.title}</h3>
							</a>
							<a href={item.url} target="_blank"  rel="noopener noreferrer">
							<FontAwesomeIcon icon={faDraftingCompass} className='project__compass project__z'/>
							</a>
						</div>
						<div className="project__info--flex">
							<p className="project__z">{item.type}</p>
							<div className="icons__Git">
								<a href={item.gitUrl} target="_blank" rel="noopener noreferrer">
									<img
										src={require('../imgs/git.svg').default}
										alt="Git Hub Icon"
										className="project__z"
									></img>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='project__iconFlex' style={idx === 3 && width < breakpoint ? marginAdd : null}>
					{idx === 3 && width < breakpoint ? <Icons /> : null}
				</div>
			</div>
		);
	});
	return <div className="projects__flex">{Items}</div>;
}
ProjectItem.propTypes = {
	projects: PropTypes.array,
};
export default ProjectItem;
