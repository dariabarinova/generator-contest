import React from 'react';
import Link from 'gatsby-link';
import Text from '../Text';
import './more.css';

const locale = {
  seeMore: 'See more',
};

const More = () => (
  <Link to="/show-more" className="see-more">
    <span className="see-more-wrapper">
      <span className="see-more-icon-wrapper">
        <span className="see-more-icon">
          <span className="icon icon-see-more" />
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
