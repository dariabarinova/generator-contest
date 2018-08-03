import React from 'react';
import { Ui, locale } from '..';

export default () => (
  <div>
    <Ui.Popover>
      <Ui.RepostList>
        <Ui.RepostListItem key="vk">
          <Ui.Text heavy fontSize={1.4}>
            {'Вконтакте '}
          </Ui.Text>
          <Ui.Text fontSize={1.3}>
            16
          </Ui.Text>
        </Ui.RepostListItem>
        <Ui.RepostListItem key="fb">
          <Ui.Text heavy fontSize={1.4}>
            {'Фейсбук '}
          </Ui.Text>
          <Ui.Text fontSize={1.3}>
            1 562
          </Ui.Text>
        </Ui.RepostListItem>
      </Ui.RepostList>
    </Ui.Popover>
    <Ui.Popover theme="like">
      <Ui.Icon type="heart" inlineBlock va={-0.15} />
      <Ui.Text white fontSize={2.2}>
        {' 10 156'}
      </Ui.Text>
    </Ui.Popover>
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
    <Ui.BlackBox>
      <Ui.Button theme="vk">
        <Ui.Text white heavy fontSize={1.4}>
          {'Вконтакте '}
        </Ui.Text>
        <Ui.Text white fontSize={1.3}>
          16
        </Ui.Text>
      </Ui.Button>
      <Ui.Button theme="fb">
        <Ui.Text white heavy fontSize={1.4}>
          {'Фейсбук '}
        </Ui.Text>
        <Ui.Text white fontSize={1.3}>
          16
        </Ui.Text>
      </Ui.Button>
      <Ui.Button>
        <Ui.Text ls bold fontSize={1}>
          ОСТАВИТЬ ЗАЯВКУ
        </Ui.Text>
      </Ui.Button>
    </Ui.BlackBox>
  </div>
);
