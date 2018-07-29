import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './text.css';

const Text = (props) => {
  const {
    children,
    bold,
    heavy,
    fontSize,
    italic,
    block,
  } = props;
  const fontSizeStyle = fontSize
    ? { style: { fontSize: `${fontSize}rem` } }
    : {};
  return (
    <span
      className={cx('text', {
        'text-heavy': heavy,
        'text-bold': bold,
        'text-block': block,
        'text-italic': italic,
      })}
      {...fontSizeStyle}
    >
      {children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  heavy: PropTypes.bool,
  fontSize: PropTypes.number,
  block: PropTypes.bool,
  italic: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
  heavy: false,
  fontSize: null,
  block: false,
  italic: false,
};

export default Text;
