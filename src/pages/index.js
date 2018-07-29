import React from 'react';
import { Ui, locale } from '..';

export default () => (
  <div>
    <Ui.Logo />
    <Ui.More />
    <Ui.MoreIdeas>
      <Ui.Text fontSize={1.26} bold>
        {locale.moreIdeas}
      </Ui.Text>
    </Ui.MoreIdeas>
    <Ui.MoreIdeas large>
      <Ui.Text fontSize={2.85} heavy italic block>
        {locale.moreIdeasLarge}
      </Ui.Text>
      <Ui.Text fontSize={5.2} heavy italic block>
        {locale.moreIdeasLargeSubtitle}
      </Ui.Text>
    </Ui.MoreIdeas>
    <Ui.NimaxPromo />
  </div>
);
