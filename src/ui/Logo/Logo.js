import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

import './logo.css';

const locale = {
  brandName: 'Nimax',
  instagram: '@nimax_agency',
  brandHref: 'http://nimax.com',
};

const Logo = ({ href }) => (
  <a
    href={href}
    className="logo"
  >
    <div className="logo-icon">
      <span className="icon icon-nimax" />
    </div>
    <div className="logo-title">
      <Text>
        {locale.brandName}
      </Text>

    </div>
    <div className="logo-instagram">
      <Text>
        {locale.instagram}
      </Text>
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
