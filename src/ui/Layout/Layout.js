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
  storeRef: PropTypes.func,
};

const dpt = {
  storeRef: null,
};

const Debug = ({ title }) => (
  <div className="layoutDebug">
    {title}
  </div>
);

const TopLeft = ({ children, storeRef }) => (
  <div className="layoutTopLeft" ref={storeRef}>
    {children}
  </div>
);

const TopLeftQuarter = ({ children, storeRef }) => (
  <div className="layoutTopLeftQuarter" ref={storeRef}>
    <div className="layoutTopLeftQuarter-content">
      {children}
    </div>
  </div>
);

const BottomRightQuarter = ({ children, storeRef }) => (
  <div className="layoutBottomRightQuarter" ref={storeRef}>
    <div className="layoutBottomRightQuarter-content">
      {children}
    </div>
  </div>
);

const BottomLeft = ({ children, storeRef }) => (
  <div className="layoutBottomLeft" ref={storeRef}>
    {children}
  </div>
);

const BottomRight = ({ children, storeRef }) => (
  <div className="layoutBottomRight" ref={storeRef}>
    {children}
  </div>
);

const CenterCenter = ({ children, storeRef }) => (
  <div className="layoutCenterCenter" ref={storeRef}>
    <div className="layoutCenterCenter-content">
      {children}
    </div>
  </div>
);

const Container = ({ children, storeRef }) => (
  <div className="layout" ref={storeRef}>
    {children}
  </div>
);

Container.propTypes = pt;
TopLeft.propTypes = pt;
BottomLeft.propTypes = pt;
BottomRight.propTypes = pt;
CenterCenter.propTypes = pt;
TopLeftQuarter.propTypes = pt;
BottomRightQuarter.propTypes = pt;

Container.defaultProps = dpt;
TopLeft.defaultProps = dpt;
BottomLeft.defaultProps = dpt;
BottomRight.defaultProps = dpt;
CenterCenter.defaultProps = dpt;
TopLeftQuarter.defaultProps = dpt;
BottomRightQuarter.defaultProps = dpt;

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
  BottomRightQuarter,
};
