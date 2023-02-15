import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const PhoneItems = (song) => {
  // eslint-disable-next-line
  const { song_name , sell_price ,buy_price , image } = song.song;

  return (

    <div className="item">
      <img src={image} className="photo" alt="songPhoto" />
      <span>{sell_price}</span>
      {/* <i><Link to={`/phoneDetail/${detail}`} exact="true"><FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" /></Link></i> */}

    </div>

  );
};

export default PhoneItems;
