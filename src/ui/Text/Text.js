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
    white,
    ls,
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
        'text-white': white,
        'text-ls': ls,
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
  white: PropTypes.bool,
  ls: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
  heavy: false,
  fontSize: null,
  block: false,
  italic: false,
  white: false,
  ls: false,
};

export default Text;
