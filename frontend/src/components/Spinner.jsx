import React from 'react';
import './Spinner.css';
import PropTypes from 'prop-types';

const Spinner = ({ height = '25px', width = '25px', lg = false}) => {

  const spinStyles = {
		height: '100vh',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

  return (
    lg ? <div style={spinStyles}><div
    className= 'spinner spinner--lg'
    style={{
      width,
      height
    }}
  ></div></div> :
    <div
      className='spinner'
      style={{
        width,
        height
      }}
    ></div>
  );
};

Spinner.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    lg: PropTypes.bool,
}

export default Spinner;
