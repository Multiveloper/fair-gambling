import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-content">
        <h3>Fair Gambling</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
          enim sed nunc sagittis accumsan sit amet nec diam. Nunc ac est libero.
          Mauris sed porttitor sem, ut sollicitudin nunc. Mauris ac ipsum nulla.
          Praesent venenatis accumsan pretium. Cras fermentum eros vestibulum,
          vulputate augue ac, gravida leo. Aliquam id eleifend ligula. Nam
          congue dignissim libero, a auctor sem ultrices et. Nullam ac feugiat
          justo.
        </p>
        <a href="#">
          <img
            className="footer-icon"
            src="twitter-icon.svg"
            width="15px"
            height="15px"
            alt=""
          />
        </a>
        <a href="#">
          <img
            className="footer-icon"
            src="twitter-icon.svg"
            width="15px"
            height="15px"
            alt=""
          />
        </a>
        <a href="#">
          <img
            className="footer-icon"
            src="twitter-icon.svg"
            width="15px"
            height="15px"
            alt=""
          />
        </a>
      </div>
      <div className="footer-line">
        <h6>Copyright Fair Gambling 2022 ©</h6>
      </div>
    </div>
  );
}

export default Footer;
