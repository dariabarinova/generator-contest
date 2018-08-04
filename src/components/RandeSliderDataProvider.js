import { Component } from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

class RangeSliderDataProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      // (esilint bug, i use it in this.getPosition as default agr)
      // eslint-disable-next-line
      x: 0,
    };
  }

  onStart = (event, { x }) => {
    this.barWidth = this.ref.getBoundingClientRect().width;
    this.initialX = x;
  };

  onDrag = (event, { x }) => {
    this.setState({
      // eslint-disable-next-line
      x,
    });
  };

  onStop = (event, { x }) => {
    this.setState({
      // eslint-disable-next-line
      x: null,
      position: this.getPosition({ x }),
    });
    this.initialX = null;
    this.barWidth = null;
  };

  getPosition = ({ x } = this.state) => {
    const { position } = this.state;

    const isDraggingNow = x;
    if (isDraggingNow) {
      const offsetFromInitialX = x - this.initialX;
      const pixelsInPercent = this.barWidth / 100;
      return clamp(
        position + (offsetFromInitialX / pixelsInPercent),
        0,
        100,
      );
    }

    return position;
  };

  storeRef = (ref) => {
    this.ref = ref;
  };

  render() {
    const { children } = this.props;
    return children({
      onStart: this.onStart,
      onDrag: this.onDrag,
      onStop: this.onStop,
      position: this.getPosition(),
      storeRef: this.storeRef,
    });
  }
}

export default RangeSliderDataProvider;
