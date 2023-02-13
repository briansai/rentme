import React from 'react';
import Logo from './Logo';
import User from './User';
import './Header.css';

const Header = () => {
  // create logo component
  return (
    <div className="header">
      <Logo />
      <User />
    </div>
  );

  // create user profile component
};

export default Header;
