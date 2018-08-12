import React from 'react';
import { Ui, locale } from '..';

export default () => ([
  <Ui.Background key={0} fullScreen>
    <Ui.Wrapper.Content>
      <Ui.Logo />
      <Ui.Wrapper.LikeRepost>
        <Ui.LikeRepost />
      </Ui.Wrapper.LikeRepost>
      {/* <Ui.MoreIdeas large>
        <Ui.Text fontSize={2.85} heavy italic block>
          {locale.moreIdeasLarge}
        </Ui.Text>
        <Ui.Text fontSize={5.2} heavy italic block>
          {locale.moreIdeasLargeSubtitle}
        </Ui.Text>
      </Ui.MoreIdeas> */}
    </Ui.Wrapper.Content>
    <Ui.Wrapper.Robot>
      <Ui.Animation key={7} type="7" />
    </Ui.Wrapper.Robot>
    <Ui.Wrapper.Description>
      <Ui.Description />
    </Ui.Wrapper.Description>
    <Ui.Wrapper.Title>
      <Ui.Title />
    </Ui.Wrapper.Title>
  </Ui.Background>,
]);
