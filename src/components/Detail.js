import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import '../style/detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BeatLoader from 'react-spinners/BeatLoader';
import { fetchDetail } from '../store/detail';
import mobile from '../assests/mobile.png';

const Detail = () => {
  const { phone } = useParams();

  const phoneDetail = useSelector((state) => state.detail);

  const {
    brand, dimension, os, image, storage, delay,
  } = phoneDetail;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail(phone));
  }, [dispatch, phone]);

  return (
    <>
      <nav className="navbar shadow-sm p-3 mb-5 bg-white rounded">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
        <img src={mobile} className="logo" alt="brand" />
        <h4 className="title">Mobile Zone</h4>
      </nav>

      <div className="detail">

        {delay && (
        <BeatLoader color="#44beff" className="loading" />
        )}

        {!delay && (
        <img src={image} alt={brand} className="detailPhoto" />
        )}
        <table className="table table-bordered">
          <tbody>
            {brand && !delay && (
            <tr>
              <th>Brand</th>
              <td>{brand}</td>
            </tr>
            )}

            {storage && !delay && (
            <tr>
              <th>Storage</th>
              <td>{storage}</td>
            </tr>
            )}

            {dimension && !delay && (
            <tr>
              <th>Dimension</th>
              <td>{dimension}</td>
            </tr>
            )}

            {os && !delay && (
            <tr>
              <th>Opertaing System</th>
              <td>{os}</td>
            </tr>
            )}

          </tbody>
        </table>

      </div>

    </>
  );
};

export default Detail;
