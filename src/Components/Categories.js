import React from 'react';
import {NavLink} from 'react-router-dom';

function Categories({filter,categories}) {
    return(
        <div className='nav-buttons'>
            {/* <h1 onClick={()=> filter('Animation')}>Animations</h1> */}
            
            {
                 categories.map((cat,i)=>{
                   return <button type='button' className='btn-port' onClick={() => filter(cat)} key={i}>{cat}</button>
                })
            }
           
        </div>
        
    );
}

export default Categories;
