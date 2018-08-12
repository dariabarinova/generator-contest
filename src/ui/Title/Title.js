import React from 'react';
import Text from '../Text/Text';
import './title.css';

const locale = {
  h1FirstLine: 'генератор',
  h1SecondLine: 'конкурсов',
};

const Title = () => (
  <h1 className="title">
    <span className="title-first">
      <Text white heavy italic fontSize={13.9}>
        {locale.h1FirstLine}
      </Text>
    </span>
    <span className="title-second">
      <span className="title-second-bg" />
      <Text white heavy italic fontSize={13.9}>
        {locale.h1SecondLine}
      </Text>
    </span>
  </h1>
);

export default Title;
