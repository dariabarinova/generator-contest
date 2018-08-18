import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

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
};
