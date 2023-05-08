import React from "react";
import PropTypes from 'prop-types';

const InfoSvg = props => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 300" style={{enableBackground: "new 0 0 490 300"}} xmlSpace="preserve" preserveAspectRatio="none" className={`skewed-bg skewed-bg-${props.target}`}><polygon className="st0" points="479.4,300 0,300 0,0 490,0 "></polygon></svg>
)

InfoSvg.propTypes = {
    target: PropTypes.string,
}

export default InfoSvg