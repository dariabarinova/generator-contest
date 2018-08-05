import React from 'react';
import PropTypes from 'prop-types';
import animations from './animations';

const animationTypes = Object.keys(animations);

const typeToSize = {
  1: {
    width: '20rem',
  },
  2: {
    width: '20rem',
  },
  3: {
    width: '20rem',
  },
  4: {
    width: '19.7rem',
  },
  5: {
    width: '20rem',
  },
  6: {
    width: '20rem',
  },
  7: {
    width: '20rem',
  },
  9: {
    width: '20rem',
  },
  17: {
    width: '20rem',
  },
};

const Animation = ({ type }) => {
  const {
    gif,
    webm,
    mp4,
    width,
    height,
  } = animations[type];
  const overridenSize = typeToSize[type];

  if (webm) {
    return (
      <video
        autoPlay
        loop
        style={overridenSize || { width, height }}
      >
        {/* <source src={mp4} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' /> */}
        <source src={webm} type="video/webm;" />
      </video>
    );
  }

  return (
    <img
      alt="animation"
      src={gif}
      style={overridenSize || { width, height }}
    />
  );
};

Animation.propTypes = {
  type: PropTypes.oneOf(
    animationTypes,
  ).isRequired,
};

export { animationTypes };
export default Animation;
