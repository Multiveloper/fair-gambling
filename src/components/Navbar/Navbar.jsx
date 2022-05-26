import React from 'react';
import AuthenticateMoralis from '../AuthenticateMoralis';
import './Navbar.css';


function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/888casino_logo.svg/1200px-888casino_logo.svg.png"
          alt="Fair Gambling Logo"
          height="70px"
          width="70px"
        />
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      {<AuthenticateMoralis />}
      <div className="social">
        <a href="#">
          <img src="twitter-icon.svg" width="30px" height="30px" alt="" />
        </a>
        <a href="#">
          <img src="twitter-icon.svg" width="30px" height="30px" alt="" />
        </a>
        <a href="#">
          <img src="twitter-icon.svg" width="30px" height="30px" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
