import { createAsyncThunk } from '@reduxjs/toolkit';

const BaseUrl = 'https://api-mobilespecs.azharimm.site/v2';

const GET_DETAIL = 'GET_DETAIL';

const detailReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_DETAIL}/fulfilled`:
      return action.payload;

    case `${GET_DETAIL}/pending`:
      // return true;
      return { ...state, delay: true };

    default:
      return state;
  }
};

export const fetchDetail = createAsyncThunk(GET_DETAIL, async (phone) => {
  const response = await fetch(`${BaseUrl}/${phone}`);

  const detail = await response.json();

  const phonesDetail = {
    brand: detail.data.brand,
    dimension: detail.data.dimension,
    os: detail.data.os,
    image: detail.data.thumbnail,
    storage: detail.data.storage,
  };

  return phonesDetail;
});

export default detailReducer;
