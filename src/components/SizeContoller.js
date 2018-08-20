import { Component } from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';
import debounce from 'lodash/debounce';

class SizeContoller extends Component {
  updateScale = debounce(() => {
    if (this.wrapper && this.scalableElem) {
      const { scaleFactor } = this.props;
      const { transform } = this.scalableElem.style;
      this.scalableElem.style.transform = transform
        .replace(/scale\([.\d]+\) /, '');

      const { width: wrapperWidth, height: wrapperHeight } = this.wrapper.getBoundingClientRect();
      const { width, height } = this.scalableElem.getBoundingClientRect();
      this.scalableElem.style.transform = transform;
      const scaleW = wrapperWidth / width * scaleFactor;
      const scaleH = wrapperHeight / height * scaleFactor;
      this.setState({
        scale: clamp(Math.min(scaleW, scaleH), 0, 1),
      });
    }
  }, 200);

  static propTypes = {
    children: PropTypes.func.isRequired,
    scaleFactor: PropTypes.number,
  };

  static defaultProps = {
    scaleFactor: 1,
  };

  constructor(props) {
    super(props);
    this.state = { scale: 1 };
    this.scalableElem = null;
    this.wrapper = null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateScale);
  }

  storeWrapperRef = (ref) => {
    if (ref !== this.scalableElem) {
      this.wrapper = ref;
      this.updateScale();
    }
  };

  storeScalableElemRef = (ref) => {
    if (ref !== this.scalableElem) {
      this.scalableElem = ref;
      this.updateScale();
    }
  };

  render() {
    const { children } = this.props;
    const { scale } = this.state;

    return children({
      storeScalableElemRef: this.storeScalableElemRef,
      storeWrapperRef: this.storeWrapperRef,
      scale,
    });
  }
}

export default SizeContoller;
