import React from 'react';
import '../assets/components/Header.scss';
import platziVideo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

 const Header = () => (

    <header className="header">
    <img className="header__img" src={platziVideo} alt="Platzi Video"/>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="user icon "/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>


 );

 export default Header;