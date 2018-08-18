import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import cx from 'classnames';
import './moreIdeas.css';
import './moreIdeasPhone.css';

const MoreIdeas = ({ children, large }) => (
  <Link
    to="/random"
    className={cx('more-ideas', {
      'more-ideas-large': large,
    })}
  >
    <span className="more-ideas-wrapper1">
      <span className="more-ideas-wrapper2">
        {children}
      </span>
    </span>
  </Link>
);

MoreIdeas.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(
      PropTypes.element.isRequired,
    ).isRequired,
  ]).isRequired,
  large: PropTypes.bool,
};

MoreIdeas.defaultProps = {
  large: false,
};

export default MoreIdeas;
