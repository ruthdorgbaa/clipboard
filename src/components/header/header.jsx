import React from 'react';
import './header.css';
import Logo from './assets/logo.svg';
import Button from '../button/button';

const Header = () => (
    <div className="body">
        <div className="header">
            <img src={Logo} className="logo" alt="logo" />
        </div>
        <section>
            <h1>A history of everything you copy</h1>
            <p1> 
            Clipboard allows you to track and organize everything you 
  copy. Instantly access your clipboard on all your devices.
            </p1>
          <Button/> 
        </section>

    </div>
);
export default Header