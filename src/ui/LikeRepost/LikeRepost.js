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
      isRepostPopoverDisplayNode: true,
    };
  }

  onMouseEnterRepost = () => {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    if (this.displayTimeout) clearTimeout(this.displayTimeout);
    this.setState({
      isRepostPopoverVisible: true,
      isLikePopoverVisible: false,
      isRepostPopoverDisplayNode: false,
    });
  };

  onMouseLeaveRepost = () => {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    if (this.displayTimeout) clearTimeout(this.displayTimeout);
    this.hideTimeout = setTimeout(() => {
      this.setState({
        isRepostPopoverVisible: false,
        isLikePopoverVisible: true,
      }, () => {
        this.displayTimeout = setTimeout(() => {
          this.setState({
            isRepostPopoverDisplayNode: true,
          });
        }, 500);
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
        <Text className="repost-list-item-social-title" heavy>
          {'Вконтакте '}
        </Text>
        <Text className="repost-list-item-social-value">
          16
        </Text>
      </RepostListItem>
      <RepostListItem key="fb">
        <Text heavy className="repost-list-item-social-title">
          {'Фейсбук '}
        </Text>
        <Text className="repost-list-item-social-value">
          1 562
        </Text>
      </RepostListItem>
    </RepostList>
  );

  render() {
    const {
      isLikePopoverVisible,
      isRepostPopoverVisible,
      isRepostPopoverDisplayNode,
    } = this.state;
    return (
      <div className="like-repost">
        <div className="like-repost-handler">
          <Text heavy white>
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
          <Text heavy white>
            {locale.repost}
          </Text>
          <div className="like-repost-popover-wrapper">
            <Popover
              visible={isRepostPopoverVisible}
              displayNone={isRepostPopoverDisplayNode}
            >
              {this.renderRepostPopoverContent()}
            </Popover>
          </div>
        </div>
      </div>
    );
  }
}
