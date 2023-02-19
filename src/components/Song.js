import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSong } from '../store/Song';
import PhoneItems from './SongItems';
import '../style/song.css';
import Navbar from './Navbar';


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
      <Navbar />
      <div className="container">
        {songList.map((item) => (
          <PhoneItems
            name={item.name}
            image={item.image}
            order={item.order}
            music={item.music}
            key={item.song_id}
          />
        ))}
      </div>

    </>
  );
};

export default Song;
