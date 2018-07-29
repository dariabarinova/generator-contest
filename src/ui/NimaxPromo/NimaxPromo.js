import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import './nimaxPromo.css';
import locale from '../../locale';

const Wrapper = ({ children }) => (
  <div className="nimax-promo-highlighter">
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

const EmptyComponent = ({ children }) => children;

const NimaxPromo = () => (
  <a href={locale.brandHref} className="nimax-promo">
    <div className="nimax-promo-wrapper">
      {locale.lines.map(({ text, fontSize, highlighted }) => {
        const Component = highlighted ? Wrapper : EmptyComponent;
        return (
          <Component key={text}>
            <Text fontSize={fontSize} heavy italic>
              {text}
            </Text>
          </Component>
        );
      })}
    </div>
  </a>
);

NimaxPromo.propTypes = {

};

export default NimaxPromo;
