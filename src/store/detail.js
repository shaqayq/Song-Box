import { createAsyncThunk } from '@reduxjs/toolkit';

const BaseUrl = 'http://acnhapi.com/v1/songs';

const GET_DETAIL = 'GET_DETAIL';


const detailReducer = (state = [] , action) => {
  switch (action.type) {

    case `${GET_DETAIL}/fulfilled`:
      return action.payload;

    c

    default:
      return state;
  }
};

export const fetchDetail = createAsyncThunk(GET_DETAIL, async (song) => {
  const response = await fetch(`${BaseUrl}/${song}`);

  const detail = await response.json();

  const songDetail = {
    name: detail["file-name"],
    buy_price: detail["buy-price"],
    sell_price: detail["sell-price"],
    order: detail.isOrderable,
    music: detail.music_uri,
    image: detail.image_uri,
  };
 
  return songDetail;
  
});

export default detailReducer;
