import { Component } from 'react';
import PropTypes from 'prop-types';

const defaultPosition = { top: 0, left: 0 };

class PopoverPositionProvider extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    getRef: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      popoverSize: {
        width: 178,
        height: 105,
      },
    };
  }

  componentDidMount() {
    const { getRef } = this.props;
    this.ref = getRef();
  }

  getPosition = () => {
    if (this.ref) {
      const { x, y, width } = this.ref.getBoundingClientRect();

      const topCenterCoordsOfHandler = {
        y,
        x: x + (width / 2),
      };
      const { popoverSize } = this.state;

      return {
        top: topCenterCoordsOfHandler.y - popoverSize.height,
        left: topCenterCoordsOfHandler.x - popoverSize.width / 2,
      };
    }

    return defaultPosition;
  };

  storeSize = ({ width, height }) => {
    this.setState({
      popoverSize: {
        width,
        height,
      },
    });
  }

  render() {
    const { children } = this.props;
    return (
      children({
        position: this.getPosition(),
        storeSize: this.storeSize,
      })
    );
  }
}

export default PopoverPositionProvider;
