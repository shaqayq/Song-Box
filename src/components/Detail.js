import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import '../style/detail.css';
import ReactAudioPlayer from 'react-audio-player';
import { FaRegGrinAlt, FaRegFrown, FaArrowLeft } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BeatLoader } from 'react-spinners';
import { fetchDetail } from '../store/detail';

const Detail = () => {
  /* eslint-disable camelcase */
  const params = useParams();

  const details = useSelector((state) => state.detail);

  const {
    name, image, music, order, sell_price, buy_price, delay,
  } = details;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetail(params.songId));
  }, [dispatch, params]);

  return (
    <>

      <div className="cardContainer">
        <Link to="/">
          <i id="backArrow">
            <FaArrowLeft />
            Back
          </i>
        </Link>
        <div className="detailCard">
          {delay && (
          <BeatLoader color="#f65ead" className="loading" />
          )}
          {!delay && (<img src={image} className="songPhoto" alt="songPhoto" />)}

          <div className="detailsPart">
            {!delay && (<h4><b>{name}</b></h4>)}
            {!delay && (
            <h5>
              Sell Price:
              {sell_price}
            </h5>
            )}
            {!delay && (
            <h5>
              Buy Price:
              {buy_price}
            </h5>
            )}
            {!delay && (
            <h5>
              IsOrder :
              <i>
                {' '}
                {order ? <FaRegFrown /> : <FaRegGrinAlt />}
              </i>
            </h5>
            )}
            {!delay && (
            <ReactAudioPlayer
              src={music}
              controls
            />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
