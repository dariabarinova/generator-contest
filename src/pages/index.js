import React from 'react';
import { Ui, locale } from '..';

export default () => ([
  <Ui.Background key={0} fullScreen>
    <Ui.Wrapper.Content>
      <Ui.Logo />
      <Ui.Wrapper.LikeRepost>
        <Ui.LikeRepost />
      </Ui.Wrapper.LikeRepost>
      <Ui.MoreIdeas large>
        <Ui.Text fontSize={2.85} heavy italic block>
          {locale.moreIdeasLarge}
        </Ui.Text>
        <Ui.Text fontSize={5.2} heavy italic block>
          {locale.moreIdeasLargeSubtitle}
        </Ui.Text>
      </Ui.MoreIdeas>
      {/* <Ui.Description />
      <Ui.Title /> */}
    </Ui.Wrapper.Content>
  </Ui.Background>,
]);
