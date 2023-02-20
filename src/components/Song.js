import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSong } from '../store/Song';
import PhoneItems from './SongItems';
import '../style/song.css';

const Song = () => {
  const songList = useSelector((state) => state.songs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (songList.length === 0) {
      dispatch(fetchSong());
    }
  });

  return (
    <>
     
      <div className="container">
        {songList.map((item) => (
          <PhoneItems
            name={item.song_name}
            image={item.image}
            order={item.order}
            music={item.music}
            id={item.song_id}
            key={item.song_id}
          />
        ))}
      </div>

    </>
  );
};

export default Song;
