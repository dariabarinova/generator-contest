import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Background from '../Background/Background';
import './loader.css';
import image from './loader.png';

class Loader extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
  };

  render() {
    const { visible } = this.props;
    return (
      <div
        className={cx('loader', {
          'loader-visible': visible,
        })}
      >
        <Background fullScreen>
          <img className="loader-image" src={image} alt="Loading..." />
        </Background>
      </div>
    );
  }
}

export default Loader;
