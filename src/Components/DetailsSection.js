import React from 'react';

function DetailsSection({tech,titel,t1,t2,t3,t4,t5,description,text1,text2,text3,text4,text5,text6,text7,text8,link}) {
  return (
    <div className='DetailsSection'>
        <div className="detail">
         <div className="detail-content">
                
                <h5 className="s-titel">📒 {titel}</h5>
               
                <h5 className='s-tech'>📍{tech}</h5>
                <ul className='s-ul'>
                  <li>{t1}</li>
                  <li>{t2}</li>
                  <li>{t3}</li>
                  <li>{t4}</li>
                  <li>{t5}</li>
                </ul>
                <h5 className='s-tech'>📍{description}</h5>
                <ul className="s-text">
                  <li>{text1}</li>
                  <li>{text2}</li>
                  <li>{text3}</li>
                  <li>{text4}</li>
                  <li>{text5}</li>
                  <li>{text6}</li>
                  <li>{text7}</li>
                  <li>{text8}</li>
                </ul>
                <div className="link">
                <a className='s-btn' href={link}>Source Code</a>
                </div>
         </div>
        </div>
      
    </div>
  );
}

export default DetailsSection;
