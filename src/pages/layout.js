import React from 'react';
import { Ui } from '..';

export default () => (
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
);
