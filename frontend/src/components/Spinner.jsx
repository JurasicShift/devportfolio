import React from 'react';
import './Spinner.css';
import PropTypes from 'prop-types';

const Spinner = ({ height = '25px', width = '25px', lg = false}) => {
  return (
    <div
      className={lg ? 'spinner spinner--lg' : 'spinner'}
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
