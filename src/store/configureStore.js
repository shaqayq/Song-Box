import { configureStore } from '@reduxjs/toolkit';
import songReducer from './Song';
import detailReducer from './detail';

const store = configureStore({
  reducer: {
    songs:  songReducer,
    detail: detailReducer,
  },
});

export default store;
