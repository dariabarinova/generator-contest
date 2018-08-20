import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import './description.css';

const locale = {
  description: 'Лучшие&nbsp;идеи<br /> топового<br />агентства.<br />Даром.<br />GIVEAWAY.<br />За&nbsp;репост!',
};

const Description = ({ storeRef, scale }) => (
  <div
    className="description"
    ref={storeRef}
    style={{
      transform: `scale(${scale}) rotate(14deg)`,
    }}
  >
    <Text white html={locale.description} />
  </div>
);

Description.propTypes = {
  storeRef: PropTypes.func,
  scale: PropTypes.number,
};

Description.defaultProps = {
  storeRef: null,
  scale: 1,
};

export default Description;
