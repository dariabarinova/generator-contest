import React from 'react';
import svg from './rotate.svg';
import Background from '../Background/Background';
import './orientation.css';

const Orientation = () => (
  <div className="orientation">
    <Background fullScreen>
      <img src={svg} alt="123s" />
    </Background>
  </div>
);

export default Orientation;
