import React from 'react';
import { Ui, locale, Components } from '..';

export default () => (
  <div>
    <Components.RangeSliderDataProvider>
      {({
        position,
        onStart,
        onDrag,
        onStop,
        storeRef,
      }) => (
        <Ui.RangeSlider
          position={position}
          onStart={onStart}
          onDrag={onDrag}
          onStop={onStop}
          storeRef={storeRef}
        />
      )}
    </Components.RangeSliderDataProvider>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Ui.LikeRepost />
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
    {Ui.iconTypes
      .filter(iconType => iconType.length === 2)
      .map(iconType => (
        <Ui.Icon key={iconType} type={iconType} inlineBlock />
      ))}
  </div>
);
