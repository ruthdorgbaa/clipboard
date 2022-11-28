import React from 'react';
import './header.css';
import Logo from './assets/logo.svg';
import Button from '../button/button';
import Computer from '../../assets/image-computer.png';

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
        <main>
            <div className="content">
                <h2>Keep track of your snippets</h2>
                <p1>
                Clipboard instantly stores any item you copy in the cloud, 
  meaning you can access your snippets immediately on all your 
  devices. Our Mac and iOS apps will help you organize everything.
                </p1>
                <div className="sub-content">
                    <img src={Computer} alt="computer" />
                    <section>
                        <div className="quick">
                            <h2>Quick Search</h2>
                            <p>Easily search your snippets by content, category, web address, application, and more.</p>
                        </div>
                        <div className="iCloud">
                            <h2>iCloud Sync</h2>
                            <p>Instantly saves and syncs snippets across all your devices.</p>
                        </div>
                        <div className="complete">
                            <h2>Complete History</h2>
                            <p>Retrieve any snippets from the first moment you started using the app.</p>
                        </div>
                    </section>
                </div>
                
                
            </div>
        </main>

    </div>
);
export default Header