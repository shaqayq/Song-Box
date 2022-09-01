import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../store/configureStore';
import Navbar from '../components/Navbar';

test('Navbar Component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByAltText('LOGO'));
});
