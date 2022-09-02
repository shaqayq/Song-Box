import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhone } from '../store/phone';
import PhoneItems from './PhoneItems';
import '../style/phone.css';
import Navbar from './Navbar';

const Phone = () => {
  const phonesList = useSelector((state) => state.phones);

  const dispatch = useDispatch();

  useEffect(() => {
    if (phonesList.length === 0) {
      dispatch(fetchPhone());
    }
  });

  return (
    <>
      <Navbar />
      <div className="container">
        {phonesList.map((item) => (
          <PhoneItems phone={item} key={item.phone_id} />
        ))}
      </div>

    </>
  );
};

export default Phone;
