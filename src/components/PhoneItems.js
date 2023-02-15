import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const PhoneItems = (song) => {
  // eslint-disable-next-line
  const { song_name , sell_price ,buy_price } = song.song;

  return (

    <div className="item">
      <img src={song_name} className="photo" alt="mobilePhoto" />
      <span>{sell_price}</span>
      {/* <i><Link to={`/phoneDetail/${detail}`} exact="true"><FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" /></Link></i> */}

    </div>

  );
};

export default PhoneItems;
