import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser, BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  const navItems = [
    { href: '#home', icon: <AiOutlineHome />, label: 'Home' },
    { href: '#about', icon: <BiUser />, label: 'About' },
    { href: '#contacts', icon: <BiMessageSquareDetail />, label: 'Contact' },
  ];

  return (
    <nav>
      {navItems.map((item) => (
        <a 
          key={item.href}
          href={item.href}
          onClick={() => setActiveNav(item.href)}
          className={activeNav === item.href ? 'active' : ''}
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
