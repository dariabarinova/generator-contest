import React from 'react';
import Helmet from 'react-helmet';
import { Ui, locale } from '..';
import * as Components from '../components';

export default () => (
  <div>
    <Components.LoaderProvider>
      {({ visible }) => (
        <Ui.Loader visible={visible} />
      )}
    </Components.LoaderProvider>
    <Helmet key={0}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Helmet>
    <Ui.Background key={1} fullScreen>
      <Ui.Logo />
      <Ui.LikeRepost />
      <Ui.MoreIdeas large>
        <Ui.Text heavy italic block>
          {locale.moreIdeasLarge}
        </Ui.Text>
        <Ui.Text heavy italic block>
          {locale.moreIdeasLargeSubtitle}
        </Ui.Text>
      </Ui.MoreIdeas>
      <Ui.Animation key={7} type="7" />
      <Ui.Description />
      <Ui.Title />
    </Ui.Background>
  </div>
);
