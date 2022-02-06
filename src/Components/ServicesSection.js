import React from 'react';

function ServicesSection({image,titel,text}) {
  return (
    <div className='ServiceSection'>
        <div className="service">
         <div className="service-content">
            <img src={image} alt="" />
                <h5 className="s-titel">{titel}</h5>
                <p className="s-text">
                   {text}
                </p>
         </div>
        </div>
      
    </div>
  );
}

export default ServicesSection;
