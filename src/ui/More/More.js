import React from 'react';
import Link from 'gatsby-link';
import Text from '../Text';
import Icon from '../Icon/Icon';
import './more.css';
import locale from '../../locale';

const More = () => (
  <Link to="/show-more" className="see-more">
    <span className="see-more-wrapper">
      <span className="see-more-icon-wrapper">
        <span className="see-more-icon">
          <Icon type="see-more" />
        </span>
      </span>
      <span className="see-more-text">
        <Text bold>
          {locale.seeMore}
        </Text>
      </span>
    </span>
  </Link>
);

export default More;
