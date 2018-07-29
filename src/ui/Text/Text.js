import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './text.css';

const Text = ({
  children,
  bold,
  heavy,
}) => (
  <span
    className={cx('text', {
      'text-heavy': heavy,
      'text-bold': bold,
    })}
  >
    {children}
  </span>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  heavy: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
  heavy: false,
}

export default Text;
