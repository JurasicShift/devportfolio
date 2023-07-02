import React from 'react';
import Icons from '../Utilities/Icons';
import './AboutBtns.css';
import PropTypes from 'prop-types';

const ChatBtns = props => {
	const titles = ['Cloud', 'Summary', 'Themes'];
	const marginStyle = {
		marginBottom: '25px',
	};
	const btns = titles.map((title, idx) => {
		return idx !== 2 ? (
			<button
				className={`chat__btn chat__btn-${idx}`}
				key={idx}
				style={marginStyle}
				value={title}
				onClick={props.handler}
			>
				{title}
			</button>
		) : (
			<React.Fragment key={idx}>
				<button
					className={`chat__btn chat__btn-${idx}`}
					value={title}
					onClick={props.handler}
				>
					{title}
				</button>
				<div className="chat__icons">
					<Icons relative={true} id="aboutPage" />
				</div>
			</React.Fragment>
		);
	});
	return btns;
};

ChatBtns.propTypes = {
	handler: PropTypes.func,
};

const OriginBtn = props => {
	const margin = {
		marginTop: '10px',
	};
	return (
		<>
			<div className="chat__original" style={props.cloud ? margin : null}>
				<button className="chat__btn" onClick={props.handler}>
					Original
				</button>
			</div>
		</>
	);
};

OriginBtn.propTypes = {
	cloud: PropTypes.bool,
	handler: PropTypes.func,
};

export { ChatBtns, OriginBtn };
