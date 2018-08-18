import React from 'react';
import Helmet from 'react-helmet';
import { Ui, locale } from '..';
import * as Components from '../components';

export default () => ([
  <Helmet key={0}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  </Helmet>,
  <Ui.Orientation key="orientation" />,
  <Components.LoaderProvider key="loader">
    {({ visible }) => (
      <Ui.Loader visible={visible} />
    )}
  </Components.LoaderProvider>,
  <Ui.Background fullScreen key="container">
    <Ui.Layout.Container>
      <Ui.Layout.TopLeft>
        <Ui.Logo />
      </Ui.Layout.TopLeft>
      <Ui.Layout.TopLeftQuarter>
        <Ui.Title />
      </Ui.Layout.TopLeftQuarter>
      <Ui.Layout.BottomLeft>
        <Ui.LikeRepost />
      </Ui.Layout.BottomLeft>
      <Ui.Layout.BottomRight>
        <Ui.Animation key={7} type="7" />
      </Ui.Layout.BottomRight>
      <Ui.Layout.CenterCenter>
        <Ui.MoreIdeas large>
          <Ui.Text heavy italic block>
            {locale.moreIdeasLarge}
          </Ui.Text>
          <Ui.Text heavy italic block>
            {locale.moreIdeasLargeSubtitle}
          </Ui.Text>
        </Ui.MoreIdeas>
      </Ui.Layout.CenterCenter>
    </Ui.Layout.Container>
  </Ui.Background>,
]);
