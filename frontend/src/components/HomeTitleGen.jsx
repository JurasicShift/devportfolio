import React from 'react';
import PropTypes from 'prop-types';

const TitleGenerator = props => {
    const newName = props.arr.map((item, idx) => {
        return (
            <span key={idx} style={props.arr[idx].visible ? { opacity: "1" } : { opacity: "0" }}>
                {item.letter}
            </span>
        );
    });
    return newName;
};

	TitleGenerator.propTypes = {
	    title: PropTypes.array
	}

    export default TitleGenerator;