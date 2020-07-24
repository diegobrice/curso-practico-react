import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo_white.png";
import userIcon from "../assets/static/user.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="logo" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="user" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="">Cuenta</a>
          </li>
          <li>
            <a href="">Cerrar Sesion</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
