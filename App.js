import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootNavigator from './src/navigators/RootNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

