import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.css';


const PageTitle = props => {

	return (
		<div className="title__div">
			<h3 className="title__text">{props.text}</h3>
		</div>
	);
};

PageTitle.propTypes = {
    text: PropTypes.string
}
export default PageTitle;
