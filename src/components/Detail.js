import React from 'react';
import { useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { useParams, Link } from 'react-router-dom';
 import '../style/detail.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
;
 import { fetchDetail } from '../store/detail';


const Detail = () => {
  /* eslint-disable camelcase */
   const params= useParams();
   
  const details = useSelector((state) => state.detail)
 
  const {name , image , music , order , sell_price , buy_price} = details;

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchDetail(params.songId))
  } , [dispatch , params]);
  
  return (
    <>
      <div className='detailCard'>
        <img src={image}/>
        <div>
           
        </div>
      </div>
    </>
  );
};
export default Detail;
