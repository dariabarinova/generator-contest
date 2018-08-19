import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import iconTypes from './iconTypes';
import './icon.css';
import './icons.css';

const Icon = ({ type, inlineBlock, va, margin }) => {
  const style = {};

  if (va) style.verticalAlign = `${va}rem`;
  if (margin) style.margin = margin;

  return (
    <span
      className={cx(
        'icon', {
          'icon-inline-block': inlineBlock,
          [`icon--${type}`]: true,
        },
      )}
      style={style}
    />
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf(iconTypes).isRequired,
  inlineBlock: PropTypes.bool,
  va: PropTypes.number,
  margin: PropTypes.string,
};

Icon.defaultProps = {
  inlineBlock: false,
  va: 0,
  margin: null,
};

export { iconTypes };
export default Icon;
