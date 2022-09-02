import { createAsyncThunk } from '@reduxjs/toolkit';

const BaseUrl = 'https://api-mobilespecs.azharimm.site/v2';

const GET_PHONE = 'GET_PHONE';

const phones = [];

const phoneReducer = (state = phones, action) => {
  switch (action.type) {
    case `${GET_PHONE}/fulfilled`:
      return action.payload;

    default:
      return state;
  }
};

export const fetchPhone = createAsyncThunk(GET_PHONE, async () => {
  const response = await fetch(`${BaseUrl}/latest`);

  const phone = await response.json();

  let id = 0;
  const arrList = [];

  phone.data.phones.map((key) => {
    arrList.push({
      phone_id: id += 1,
      phoneName: key.phone_name,
      phoneImage: key.image,
      detail: key.slug,
    });
    return arrList;
  });

  return arrList;
});

export default phoneReducer;
