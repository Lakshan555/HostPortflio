import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
        <div className="titel"> 
             <Tittle tittel={"Contact"} span={"Contact"} />
         </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe title='' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2068.039925197469!2d79.98229589294613!3d6.923739790705858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49eff986e908b04e!2sAlpha%20Squad!5e0!3m2!1sen!2slk!4v1643956775132!5m2!1sen!2slk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+94765476204'} text2={'+94722848202'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'ishanka44@gmail.com'} text2={'it19951836@my.sliit.lk'} title={'Email'}/>
                    <ContactItem icon={location} text1={'206/9/A'} text2={'Kothalawala'} title={'Kaduwela'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
