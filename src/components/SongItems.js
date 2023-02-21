import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegGrinAlt, FaRegFrown, FaMusic } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import ReactAudioPlayer from 'react-audio-player';
// import { Link } from 'react-router-dom';
// import Detail from './Detail';

const PhoneItems = (song) => {
  // eslint-disable-next-line
  /* eslint-disable camelcase */
  const {
    name, image, order, id,
  } = song;

  return (

    <div className="item">
      <img src={image} className="photo" alt="songPhoto" />
      <h5>{name}</h5>
      <div id="itemDetails">
        <Link to={`/songDetail/${id}`}><b>Detail</b><FaMusic/></Link>
        <i>
          <b>IsOrder:</b> 
          {order
            ? <FaRegGrinAlt /> : <FaRegFrown />}

        </i>

      </div>

    </div>

  );
};

export default PhoneItems;
