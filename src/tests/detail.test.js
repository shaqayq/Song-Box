import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../store/configureStore';
import Detail from '../components/Detail';

test('Detail Component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByAltText('brand'));
});
