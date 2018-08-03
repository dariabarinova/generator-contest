import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import locale from '../../locale';

import Icon from '../Icon/Icon';
import './logo.css';

const Logo = ({ href }) => (
  <a
    href={href}
    className="logo"
  >
    <div className="logo-icon">
      <Icon type="logo" />
    </div>
    <div className="logo-text-wrapper">
      <div className="logo-title">
        <Text heavy white>
          {locale.brandName}
        </Text>
      </div>
      <div className="logo-instagram">
        <Text white>
          {locale.instagram}
        </Text>
      </div>
    </div>
  </a>
);

Logo.propTypes = {
  href: PropTypes.string,
};

Logo.defaultProps = {
  href: locale.brandHref,
};

export default Logo;
