import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from './phone';
import detailReducer from './detail';

const store = configureStore({
  reducer: {
    phones: phoneReducer,
    detail: detailReducer,
  },
});

export default store;
