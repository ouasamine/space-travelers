import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Rocket from '../components/Rocket';

describe('Test for Rocket components', () => {
  it('Check if the Rocket section are available', () => {
    const Rocket = renderer.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(Rocket).toMatchSnapshot();
  });
});
