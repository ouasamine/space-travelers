import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Missions from '../pages/Missions';

describe('Test for Missions components', () => {
  it('Check if the Missions section are available', () => {
    const missions = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });
});
