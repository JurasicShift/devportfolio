import React from 'react';
import { TagCloud } from 'react-tagcloud';
import PropTypes from 'prop-types';

const WordCloud = (props) => {
  const options = {
    size: {
      min: 12,
      max: 35,
    },
    color: {
        luminosity: 'light',
        hue: 'blue',
    },
    fontFamily: 'Arial, sans-serif',
    shape: 'rectangle',
    tooltipOptions: {
      showTooltip: true,
      offsetX: 0,
      offsetY: 0,
    },
   
  };

  return (
    <div>
      <TagCloud tags={props.tags}  minSize={options.size.min} maxSize={options.size.max}  colorOptions={options.color} style={{ fontFamily: options.fontFamily }} onClick={options.onClick} onMouseOver={options.onMouseOver} />
    </div>
  );
};



WordCloud.propTypes = {
    tags: PropTypes.array
}

export default WordCloud;
