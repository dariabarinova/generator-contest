import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './icon.css';

const Icon = ({ type, inlineBlock, va }) => {
  const style = va
    ? { verticalAlign: `${va}rem` }
    : {};
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
  type: PropTypes.string.isRequired,
  inlineBlock: PropTypes.bool,
  va: PropTypes.number,
};

Icon.defaultProps = {
  inlineBlock: false,
  va: 0,
};

export default Icon;
