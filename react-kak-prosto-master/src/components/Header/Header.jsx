import React from 'react';
import ss from'./Header.module.css';

const Header = () => {
    return (
      <header className={ss.header}>
        <img
          src='https://i.ya-webdesign.com/images/the-internet-png-2.png'
          alt=""
        />
      </header>
    );
}

export default Header;