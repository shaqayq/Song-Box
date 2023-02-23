import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSong } from '../store/Song';
import PhoneItems from './SongItems';
import Pagination from './Pagination';
import {FaLessThan , FaGreaterThan} from 'react-icons/fa';
import '../style/song.css';

const Song = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(8);

  const songList = useSelector((state) => state.songs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (songList.length === 0) {
      dispatch(fetchSong());
    }
  });

  // Get current posts
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songList.slice(indexOfFirstSong, indexOfLastSong);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>

      <div className="container">
        <div className='desktopVersion'>
        {currentSongs.map((item) => (
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
      <div className='mobileVersion'>
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
    </div>
      <Pagination
        songsPerPage={songsPerPage}
        totalSongs={songList.length}
        paginate={paginate}
        currentNumber={currentPage}
      />

    </>
  );
};

export default Song;
