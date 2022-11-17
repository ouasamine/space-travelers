import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Header from '../components/Header';

describe('Test for Header components', () => {
  it('Check if the Header section are available', () => {
    const header = renderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(header).toMatchSnapshot();
  });
});
