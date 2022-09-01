import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const PhoneItems = (phone) => {
  // eslint-disable-next-line
  const { phoneName, phoneImage, detail } = phone.phone;

  return (

    <div className="item">
      <img src={phoneImage} className="photo" alt="mobilePhoto" />
      <span>{phoneName}</span>
      <i><Link to={`/phoneDetail/${detail}`} exact="true"><FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" /></Link></i>

    </div>

  );
};

export default PhoneItems;
