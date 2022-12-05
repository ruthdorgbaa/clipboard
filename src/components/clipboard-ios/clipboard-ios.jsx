import React from 'react';
import './clipboard-ios.css';
import Button from '../button/button';
import Logo from '../../assets/logo.svg';
import Facebook from '../../assets/icon-facebook.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Instagram from '../../assets/icon-instagram.svg';

const Clipboard = () => (
    <div className="contents">
        <div className="clipboard">
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard.
   
            </p>
            <Button />
        </div>
        
        <footer>
            <div className="list">
        <img src={Logo} width="60px" alt="logo" />
            <ul>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Press Kit</li>
                <li>Install Guide</li>
                </ul>
                </div>
            <div className="icons">
                <img src={Facebook} alt="facebook" />
                <img src={Twitter} alt="twitter" /> 
                <img src={Instagram} alt="insta" /> 
                
        </div>

        </footer>
            
    </div>
   
);
export default Clipboard