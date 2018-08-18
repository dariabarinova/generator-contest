import React from 'react';
import { Ui } from '..';
import * as Components from '../components';

export default () => ([
  <Ui.Orientation key="orientation" />,
  <Components.LoaderProvider key="loader">
    {({ visible }) => (
      <Ui.Loader visible={visible} />
    )}
  </Components.LoaderProvider>,
  <Ui.Background fullScreen key="container">
    <Ui.Layout.Container>
      <Ui.Layout.TopLeft>
        <Ui.Layout.Debug title="TopLeft" />
      </Ui.Layout.TopLeft>
      <Ui.Layout.BottomLeft>
        <Ui.Layout.Debug title="BottomLeft" />
      </Ui.Layout.BottomLeft>
      <Ui.Layout.BottomRight>
        <Ui.Layout.Debug title="BottomRight" />
      </Ui.Layout.BottomRight>
      <Ui.Layout.CenterCenter>
        <Ui.Layout.Debug title="CenterCenter" />
      </Ui.Layout.CenterCenter>
    </Ui.Layout.Container>
  </Ui.Background>,
]);
