import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import random from 'lodash/random';
import Text from '../Text/Text';
import Icon, { iconTypes } from '../Icon/Icon';
import './rangeSlider.css';

// eslint-disable-next-line
class RangeSlider extends Component {

  static propTypes = {
    position: PropTypes.number,
    onStart: PropTypes.func.isRequired,
    onDrag: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    storeRef: PropTypes.func.isRequired,
  };

  static defaultProps = {
    position: 80,
  };

  constructor(props) {
    super(props);
    this.randomIcon = this.getRandomEmojiIcon();
  }

  getRandomEmojiIcon = () => {
    const emojiIcons = iconTypes
      .filter(iconType => iconType.length === 2);
    const randomIcon = emojiIcons[
      random(0, emojiIcons.length - 1)
    ];
    return randomIcon;
  };

  render() {
    const {
      position,
      onStart,
      onDrag,
      onStop,
      storeRef,
    } = this.props;

    return (
      <div className="range-slider">
        <Text fontSize={1.4} bold>
          Как вам идея?
        </Text>
        <div
          className="range-slider-bar"
          ref={storeRef}
        >
          <div
            className="range-slider-bar-progress"
            style={{ width: `${position}%` }}
          />
          <DraggableCore
            onStart={onStart}
            onDrag={onDrag}
            onStop={onStop}
          >
            <div
              style={{ left: `${position}%` }}
              className="range-slider-bar-handler"
            >
              <Icon type={this.randomIcon} inlineBlock />
            </div>
          </DraggableCore>
        </div>
      </div>
    );
  }
}

export default RangeSlider;
