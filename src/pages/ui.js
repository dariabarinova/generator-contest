import React from 'react';
import { Ui, locale, Components } from '..';

export default () => ([
  <Ui.Background key={0}>
    <Ui.Description />
    <Ui.Title />
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
      <Ui.Text heavy italic block>
        {locale.moreIdeasLarge}
      </Ui.Text>
      <Ui.Text heavy italic block>
        {locale.moreIdeasLargeSubtitle}
      </Ui.Text>
    </Ui.MoreIdeas>
    <Ui.NimaxPromo />
  </Ui.Background>,

  <Ui.Background theme="black" key={1}>
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
  </Ui.Background>,
  <Ui.Background key={2}>
    {[
      ...Ui.iconTypes
        .filter(iconType => iconType.length === 2)
        .map(iconType => (
          <Ui.Icon key={iconType} type={iconType} inlineBlock />
        )),
      ...Ui.animationTypes.map(type => (
        <Ui.Animation key={type} type={type} />
      )),
    ]}
  </Ui.Background>,
]);
