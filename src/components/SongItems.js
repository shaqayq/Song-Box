import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlayCircle, FaSmile, FaSadTear } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const PhoneItems = (song) => {
  // eslint-disable-next-line
  /* eslint-disable camelcase */
  const {
    song_name, image, order, music,
  } = song;

  return (

    <div className="item">
      <img src={image} className="photo" alt="songPhoto" />
      <h5>{song_name}</h5>
      <div id="itemDetails">

        <a href={music}>
          Play
          <FaPlayCircle />
        </a>
        <i>
          IsOrder:
          {order
            ? <FaSmile /> : <FaSadTear />}

        </i>

      </div>
      {/* <i><Link to={`/phoneDetail/${detail}`} exact="true">
        <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" /></Link></i>  */}
    </div>

  );
};

export default PhoneItems;
