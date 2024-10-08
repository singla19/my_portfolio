import React from 'react';
import './Header.css';
import CV from './CV';
import me from '../../assets/photo.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Bhavay Singla</h1>
        <h5 className="text-light">Computer Science Engineering Undergraduate</h5>
        <CV />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt='Bhavay Singla' />
        </div>
      </div>
    </header>
  );
};

export default Header;
