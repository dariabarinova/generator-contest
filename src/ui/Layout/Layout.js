import React from 'react';
import PropTypes from 'prop-types';
import MD from 'mobile-detect';
import './layout.css';
import './layoutPhone.css';
import './layoutTablet.css';
import './layoutDesktop.css';

if (typeof window !== 'undefined') {
  const device = new MD(window.navigator.userAgent);

  if (device.phone()) {
    document.body.className += ' phone';
  } else if (device.tablet()) {
    document.body.className += ' tablet';
  } else {
    document.body.className += ' desktop';
  }
}

const pt = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.element.isRequired,
    ).isRequired,
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};

const Debug = ({ title }) => (
  <div className="layoutDebug">
    {title}
  </div>
);

const TopLeft = ({ children }) => (
  <div className="layoutTopLeft">
    {children}
  </div>
);

const TopLeftQuarter = ({ children }) => (
  <div className="layoutTopLeftQuarter">
    <div className="layoutTopLeftQuarter-content">
      {children}
    </div>
  </div>
);

const BottomLeft = ({ children }) => (
  <div className="layoutBottomLeft">
    {children}
  </div>
);

const BottomRight = ({ children }) => (
  <div className="layoutBottomRight">
    {children}
  </div>
);

const CenterCenter = ({ children }) => (
  <div className="layoutCenterCenter">
    <div className="layoutCenterCenter-content">
      {children}
    </div>
  </div>
);

const Container = ({ children }) => (
  <div className="layout">
    {children}
  </div>
);

Container.propTypes = pt;
TopLeft.propTypes = pt;
BottomLeft.propTypes = pt;
BottomRight.propTypes = pt;
CenterCenter.propTypes = pt;
TopLeftQuarter.propTypes = pt;
Debug.propTypes = {
  title: PropTypes.string.isRequired,
};

export {
  TopLeft,
  BottomLeft,
  BottomRight,
  Container,
  Debug,
  CenterCenter,
  TopLeftQuarter,
};
