import React from 'react';
import {faFacebook,faGithub,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typical from 'react-typical';

function HomePage() {
    return (
        <div className='HomePage'>
            <header className="main-hero">
                <h1 className="hero-text">
                    Hi, I am {' '}
                    
                    <span>
                    <Typical
                    loop={Infinity}
                    wrapper ='b'
                    steps={[
                        "Ishanka Pramidu Lakshan.",
                        1000,
                        "a full stack developer.",
                        1000,
                        "a Native App developer.",
                        1000,
                        "a Hybrid App developer. ",
                        1000,
                
                    ]}
                    
                    />
                    </span>

                   
                </h1>
                <p className='hero-description'>
                   Welcome to my portfolio. I'm an Independent creative application developer from <span> Sri Lanka .</span>
                </p>

                <div className="icons">
                    
                    <a href='https://github.com/Lakshan555' className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href='https://lk.linkedin.com/in/ishankapramidu' className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </a>
                    <a href='https://web.facebook.com/ishanka.pramidu/' className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fa"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
