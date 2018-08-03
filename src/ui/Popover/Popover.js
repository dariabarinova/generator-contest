import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './popover.css';


export default class Popover extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element.isRequired,
      PropTypes.arrayOf(
        PropTypes.element.isRequired,
      ).isRequired,
    ]).isRequired,
    storeSize: PropTypes.func.isRequired,
    position: PropTypes.shape({
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    }).isRequired,
    theme: PropTypes.string,
    visible: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };

  static defaultProps = {
    theme: 'default',
    visible: false,
    onMouseEnter: null,
    onMouseLeave: null,
  };

  componentDidMount() {
    const { storeSize } = this.props;
    storeSize(
      this.getSize(),
    );
  }

  componentDidUpdate() {
  }

  getSize = () => {
    const { width, height } = this.ref.getBoundingClientRect();
    return { width, height };
  }

  storeRef = (ref) => {
    this.ref = ref;
  };

  render() {
    const {
      children,
      theme,
      position,
      visible,
      onMouseEnter,
      onMouseLeave,
    } = this.props;
    return (
      <div
        ref={this.storeRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cx(
          'popover', {
            [`popover-theme--${theme}`]: theme,
            'popover-hidden': !visible,
          },
        )}
        style={{ ...position }}
      >
        {children}
        <span className="popover-arrow" />
      </div>
    );
  }
}
