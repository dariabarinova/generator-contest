import React from 'react';
import PropTypes from 'prop-types';
import animations from './animations';

const animationTypes = Object.keys(animations);

const Animation = ({ type }) => (
  <img
    src={animations[type].gif}
  />
);

Animation.propTypes = {
  type: PropTypes.oneOf(
    animationTypes,
  ).isRequired,
};

export { animationTypes };
export default Animation;
