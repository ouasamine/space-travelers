import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../pages/MyProfile';

describe('Display Profile element', () => {
  test('Check if Profile Component Renders in DOM properly', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(screen.queryByText(/My Missions/)).toBeTruthy();
  });
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
