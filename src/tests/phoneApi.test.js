import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/configureStore';
import PhoneItems from '../components/PhoneItems';

const server = setupServer(
  rest.get('https://api-mobilespecs.azharimm.site/v2/latest', (req, res, ctx) => res(ctx.Json(
    [{
      phone_id: 1,
      phoneName: 'testName',
      phoneImage: 'testImage',
      detail: 'testDetail',
    }],
  ))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Phone reducer', async () => {
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
  expect(await screen.getByAltText(/mobilePhoto/));
});
