import React from 'react';
import Text from '../Text';

const locale = {
  seeMore: 'See more',
};

const More = () => (
  <button type="button" className="see-more">
    <div className="see-more-icon">
      <span className="icon icon-see-more" />
    </div>
    <span className="see-more-text">
      <Text>
        {locale.seeMore}
      </Text>
    </span>
  </button>
);

export default More;
