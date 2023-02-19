import React, { useEffect } from 'react';
// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import '../style/detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BeatLoader from 'react-spinners/BeatLoader';
import { fetchDetail } from '../store/detail';
import mobile from '../assests/mobile.png';

 const Detail = (details) => {

  const {song_name} = details;

//const songDetail = useSelector((state) => state.song_name);

// const {
//   brand, dimension, os, image, storage, delay,
// } = phoneDetail;

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchDetail(phone));
// }, [dispatch, phone]);
  (
    <>
      <h1>{song_name}</h1>
    </>
);
 }
 export default Detail;
