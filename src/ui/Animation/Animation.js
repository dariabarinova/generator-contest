import React from 'react';
import PropTypes from 'prop-types';
import animations from './animations';

const animationTypes = Object.keys(animations);

const Animation = ({ type }) => {
  const {
    gif,
    width,
    height,
  } = animations[type];
  return (
    <img
      alt="animation"
      src={gif}
      style={{
        width,
        height,
      }}
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
