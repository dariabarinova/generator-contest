import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Popover from '../Popover/Popover';
import Icon from '../Icon/Icon';
import RepostList, { RepostListItem } from '../RepostList/RepostList';
import './likeRepost.css';

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
        <div className="like-repost-handler">
          <Text fontSize={2} heavy white>
            {locale.like}
          </Text>
          <div className="like-repost-popover-wrapper">
            <Popover
              theme="like"
              visible={isLikePopoverVisible}
            >
              {this.renderLikePopoverContent()}
            </Popover>
          </div>
        </div>
        <div
          className="like-repost-handler"
          onMouseEnter={this.onMouseEnterRepost}
          onMouseLeave={this.onMouseLeaveRepost}
        >
          <Text fontSize={2} heavy white>
            {locale.repost}
          </Text>
          <div className="like-repost-popover-wrapper">
            <Popover
              visible={isRepostPopoverVisible}
            >
              {this.renderRepostPopoverContent()}
            </Popover>
          </div>
        </div>
      </div>
    );
  }
}
