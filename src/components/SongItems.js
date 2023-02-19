import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlayCircle, FaSmile, FaSadTear } from 'react-icons/fa';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import Detail from './Detail';

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
        
        <i>
          IsOrder:
          {order
            ? <FaSmile /> : <FaSadTear />}

        </i>

        {/* <ReactAudioPlayer
          src="http://acnhapi.com/v1/music/1"
          controls
        /> */}
      </div>
       
    </div>

  );
};

export default PhoneItems;
