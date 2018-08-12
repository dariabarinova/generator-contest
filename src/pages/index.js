import React from 'react';
import Helmet from 'react-helmet';
import { Ui, locale } from '..';

export default () => ([
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  </Helmet>,
  <Ui.Background key={0} fullScreen>
    <Ui.Wrapper.Content>
      <Ui.Logo />
      <Ui.Wrapper.LikeRepost>
        <Ui.LikeRepost />
      </Ui.Wrapper.LikeRepost>
      <Ui.Wrapper.MoreIdeas>
        <Ui.MoreIdeas large>
          <Ui.Text fontSize={2.85} heavy italic block>
            {locale.moreIdeasLarge}
          </Ui.Text>
          <Ui.Text fontSize={5.2} heavy italic block>
            {locale.moreIdeasLargeSubtitle}
          </Ui.Text>
        </Ui.MoreIdeas>
      </Ui.Wrapper.MoreIdeas>
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
