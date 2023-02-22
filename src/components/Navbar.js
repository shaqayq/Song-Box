import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../style/navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar shadow-sm p-3 mb-5 bg-white rounded">
      <div id="logo">
        <img src="https://previews.123rf.com/images/julinzy/julinzy1304/julinzy130400067/19136652-song-note-music-icon-logo.jpg" className="logo" alt="LOGO" />
        <h4 className="title"> Box</h4>
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
