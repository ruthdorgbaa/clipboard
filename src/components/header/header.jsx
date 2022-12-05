import React from 'react';
import './header.css';
import Logo from '../../assets/logo.svg';
import Button from '../button/button';
import Computer from '../../assets/image-computer.png';
import Device from '../../assets/image-devices.png';
import Blacklist from './assets/icon-blacklist.svg';
import Plain from './assets/icon-text.svg';
import Sneak from './assets/icon-preview.svg';
import Google from '../../assets/logo-google.png';
import IBM from '../../assets/logo-ibm.png';
import Microsoft from '../../assets/logo-microsoft.png';
import HP from '../../assets/logo-hp.png';
import Vector from '../../assets/logo-vector-graphics.png';


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
            </div>
                <div className="sub-content">
                    <img src={Computer} width="720px" height="580px" alt="computer" />
                    <div className="section1">
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
                    
                        <div />
                    </div>
                    </div>
             </div> 
                    <div className="section2">
                        <div className="access">
                            <h2>Access Clipboard Anywhere</h2>
                            <p>Whether you’re on the go, or at your computer, you can access all your Clipboard 
                            snippets in a few simple clicks.
                            </p>
                    </div>
                    
                        <img className='device' src={Device} alt="device" />
                        <div className="supercharge">
                            <h2>Supercharge your workflow</h2>
                            <p>
                                We’ve got the tools to boost your productivity.
                            </p>
                        </div>
                    </div>

                    <section3>
                        <div className="blacklist">
                            <img src={Blacklist} alt="blacklist" />
                            <h2>Create blacklists</h2>
                            <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                        </div>
                        <div className="plain">
                            <img src={Plain} alt="plain" /> 
                            <h2>Plain text snippets</h2>
                            <p>
                                Remove unwanted formatting from copied text for a consistent look.
                            </p>
                        </div>
                        <div className="sneak">
                            <img src={Sneak} alt="sneak" />
                            <h2>Sneak preview</h2>
                            <p>
                            Quick preview of all snippets on your Clipboard for easy access.
                            </p>
                        </div>
                        <div className="logos">
                            <img src={Google} width="100px" height="50px" alt="google-log" />
                            <img src={IBM} width="110px" height="40px" alt="ibm" />
                            <img src={ Microsoft} height="25px" width="50px" alt="microsoft" />
                            <img src={HP} height="80px" width="50px" alt="hp-logo" />
                            <img src={Vector} height="25px" width="100px" alt="vector" />
                        </div>
                        
                    </section3>
                
                
                

        </main>

    </div>
);
export default Header