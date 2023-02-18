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
          <PhoneItems song={item} key={item.song_id} />
        ))}
      </div>

    </>
  );
};

export default Song;
