import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../style/navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar shadow-sm p-3 mb-5 bg-white rounded">
      <div id="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTi2RQUeSmpu6f6glFcDj_lE8D6F50BoRT0g&usqp=CAU" className="logo" alt="LOGO" />
        <h4 className="title">Music Box</h4>
      </div>
      <div id="social">
        <i>
          {' '}
          <FaInstagram />
          {' '}
        </i>
        <i><FaTwitter /></i>
        <i><FaFacebook /></i>
      </div>
    </nav>
  </>
);

export default Navbar;
