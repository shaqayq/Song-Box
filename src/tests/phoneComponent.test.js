import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../store/configureStore';
import PhoneItems from '../components/PhoneItems';

test('Phone component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <PhoneItems
          key="testKey"
          phone="testValue"
        />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByAltText('mobilePhoto'));
});
