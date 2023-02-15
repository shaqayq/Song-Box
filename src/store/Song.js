import { createAsyncThunk } from '@reduxjs/toolkit';

const BaseUrl = 'http://acnhapi.com/v1/songs';

const GET_SONG = 'GET_SONG';

const songs = [];

const songReducer = (state = songs, action) => {
  switch (action.type) {
    case `${GET_SONG}/fulfilled`:
      return action.payload;

    default:
      return state;
  }
};

export const fetchSong = createAsyncThunk(GET_SONG, async () => {
 
  const response = await fetch(BaseUrl);
  
  const song = await response.json();

  let id = 0;
  const arrList = [];
  
  Object.values(song).forEach((key)=> {
    arrList.push({
      song_id: key.id ,
      song_name: key["file-name"],
      buy_price: key["buy-price"],
      sell_price: key["sell-price"],
      order: key.isOrderable,
      music: key.music_uri,
      image: key.image_uri
    })
  })

 return arrList;


});

export default songReducer;
