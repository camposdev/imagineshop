import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src={logo} alt="Imagine Shop"/>
        </div>

        <div className="footer-social">
          <ul>
            <li><a href="http://facebook.com"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
            <li><a href="http://instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
            <li><a href="http://youtube.com"><FontAwesomeIcon icon={['fab', 'youtube']} /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-address">
        <p>Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros - Florianópolis/SC</p>
      </div>
    </footer>
  )
}

export default Footer;