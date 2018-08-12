import React from 'react';
import Text from '../Text/Text';
import './description.css';

const locale = {
  description: 'Лучшие идеи топового агентства. Даром. GIVEWAY. За&nbsp;репост!',
};

const Description = () => (
  <div className="description">
    <Text fontSize={4.7} white html={locale.description} />
  </div>
);

export default Description;
