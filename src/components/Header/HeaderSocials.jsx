import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sbhavay/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/singla19" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/singla.19/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
