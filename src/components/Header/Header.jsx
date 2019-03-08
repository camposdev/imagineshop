import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Imagine Shop"/>
          </Link>
        </div>

        <nav className="header-links">
          <ul className="header-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">Sobre</Link></li>
            <li><Link to="/products/">Produtos</Link></li>
          </ul>

          <div className="header-cart">
            <FontAwesomeIcon className="header-cart-icon" icon="shopping-cart" />
            <span className="header-cart-count">3</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;