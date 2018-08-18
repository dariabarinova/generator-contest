import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import './title.css';

const locale = {
  h1FirstLine: 'генератор',
  h1SecondLine: 'конкурсов',
};

const Title = ({ storeRef, scale }) => (
  <h1
    className="title"
    ref={storeRef}
    style={{
      transform: `scale(${scale}) rotate(-21deg)`,
    }}
  >
    <span className="title-first">
      <Text white heavy italic>
        {locale.h1FirstLine}
      </Text>
    </span>
    <span className="title-second">
      <span className="title-second-bg" />
      <Text white heavy italic>
        {locale.h1SecondLine}
      </Text>
    </span>
  </h1>
);


Title.propTypes = {
  storeRef: PropTypes.func,
  scale: PropTypes.number,
};

Title.defaultProps = {
  storeRef: null,
  scale: 1,
};

export default Title;
