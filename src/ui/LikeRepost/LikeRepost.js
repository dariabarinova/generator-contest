import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Popover from '../Popover/Popover';
import Icon from '../Icon/Icon';
import RepostList, { RepostListItem } from '../RepostList/RepostList';
import PopoverPositionProvider from './PopoverPositionProvider';
import './likeRepost.css';

const popoverTypes = {
  like: 'like',
  repost: 'repost',
};

const locale = {
  like: 'Лайк',
  repost: 'Репост',
};

export default class LikeRepost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLikePopoverVisible: true,
      isRepostPopoverVisible: false,
    };
  }

  onMouseEnterRepost = () => {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.setState({
      isRepostPopoverVisible: true,
      isLikePopoverVisible: false,
    });
  };

  onMouseEnterRepostPopover = () => {
    const { isRepostPopoverVisible } = this.state;
    if (isRepostPopoverVisible) {
      this.onMouseEnterRepost();
    }
  };

  onMouseLeaveRepost = () => {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => {
      this.setState({
        isRepostPopoverVisible: false,
        isLikePopoverVisible: true,
      });
    }, 300);
  }

  getRefFactory = type => () => this[`${type}_ref`];

  storeRefFactory = type => (ref) => {
    this[`${type}_ref`] = ref;
  };

  renderLikePopoverContent = () => [
    <Icon key={0} type="heart" inlineBlock va={-0.15} />,
    <Text key={1} white fontSize={2.2}>
      {' 10 156'}
    </Text>,
  ];

  renderRepostPopoverContent = () => (
    <RepostList>
      <RepostListItem key="vk">
        <Text heavy fontSize={1.4}>
          {'Вконтакте '}
        </Text>
        <Text fontSize={1.3}>
          16
        </Text>
      </RepostListItem>
      <RepostListItem key="fb">
        <Text heavy fontSize={1.4}>
          {'Фейсбук '}
        </Text>
        <Text fontSize={1.3}>
          1 562
        </Text>
      </RepostListItem>
    </RepostList>
  );

  render() {
    const {
      isLikePopoverVisible,
      isRepostPopoverVisible,
    } = this.state;
    return (
      <div className="like-repost">
        <div
          className="like-repost-handler"
          ref={this.storeRefFactory(popoverTypes.like)}
        >
          <Text fontSize={2} heavy white>
            {locale.like}
          </Text>
        </div>
        <div
          className="like-repost-handler"
          ref={this.storeRefFactory(popoverTypes.repost)}
          onMouseEnter={this.onMouseEnterRepost}
          onMouseLeave={this.onMouseLeaveRepost}
        >
          <Text fontSize={2} heavy white>
            {locale.repost}
          </Text>
        </div>
        <PopoverPositionProvider
          key={popoverTypes.repost}
          getRef={this.getRefFactory(popoverTypes.repost)}
        >
          {({ position, storeSize }) => (
            <Popover
              visible={isRepostPopoverVisible}
              storeSize={storeSize}
              position={position}
              onMouseEnter={this.onMouseEnterRepostPopover}
              onMouseLeave={this.onMouseLeaveRepost}
            >
              {this.renderRepostPopoverContent()}
            </Popover>
          )}
        </PopoverPositionProvider>
        <PopoverPositionProvider
          key={popoverTypes.like}
          getRef={this.getRefFactory(popoverTypes.like)}
        >
          {({ position, storeSize }) => (
            <Popover
              theme="like"
              visible={isLikePopoverVisible}
              storeSize={storeSize}
              position={position}
            >
              {this.renderLikePopoverContent()}
            </Popover>
          )}
        </PopoverPositionProvider>
      </div>
    );
  }
}
