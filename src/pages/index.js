import React from 'react';
import Helmet from 'react-helmet';
import { Ui, locale } from '..';
import * as Components from '../components';
import './index.css';

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

      <Components.SizeContoller scaleFactor={0.9}>
        {({ storeWrapperRef, storeScalableElemRef, scale }) => (
          <Ui.Layout.TopLeftQuarter storeRef={storeWrapperRef}>
            <Ui.Title scale={scale} storeRef={storeScalableElemRef} />
          </Ui.Layout.TopLeftQuarter>
        )}
      </Components.SizeContoller>

      <Components.SizeContoller scaleFactor={0.8}>
        {({ storeWrapperRef, storeScalableElemRef, scale }) => (
          <Ui.Layout.BottomRightQuarter storeRef={storeWrapperRef}>
            <Ui.Description scale={scale} storeRef={storeScalableElemRef} />
          </Ui.Layout.BottomRightQuarter>
        )}
      </Components.SizeContoller>

      <Ui.Layout.TopRightQuarter>
        <Ui.Animation key={7} type="6" />
      </Ui.Layout.TopRightQuarter>

      <Ui.Layout.TopRightQuarter>
        <Ui.Icon type="giveaway" margin="9rem 15rem 0 0" />
      </Ui.Layout.TopRightQuarter>

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
