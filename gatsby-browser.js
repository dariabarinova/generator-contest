import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/createStore';

const store = createStore();

/* eslint-disable import/prefer-default-export */
export const wrapRootComponent = ({ Root }) => {
  const ConnectedRootComponent = () => (
    <Provider store={store}>
      <Root />
    </Provider>
  );

  return ConnectedRootComponent;
};
