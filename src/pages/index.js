import React from 'react';
import Helmet from 'react-helmet';
import { Ui, locale } from '..';
import * as Components from '../components';

export default () => (
  <div>
    <Components.Loader key={2} />
    <Helmet key={0}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Helmet>
    <Ui.Background key={1} fullScreen>
      <Ui.Wrapper.Content>
        <Ui.Logo />
        <Ui.Wrapper.LikeRepost>
          <Ui.LikeRepost />
        </Ui.Wrapper.LikeRepost>
        <Ui.Wrapper.MoreIdeas>
          <Ui.MoreIdeas large>
            <Ui.Text heavy italic block>
              {locale.moreIdeasLarge}
            </Ui.Text>
            <Ui.Text heavy italic block>
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
    </Ui.Background>
  </div>
);
