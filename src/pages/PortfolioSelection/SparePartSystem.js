import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from '../Card';
import VideoCard from '../VideoCard';
import Tittle from "../../Components/Tittle";
import DetailsSection from '../../Components/DetailsSection';


function SparePartSystem() {

   
  return(
    
    <div className='SparePartSystem'>
       <div className="titel"> 
         <Tittle tittel={"Vehicle Spare Part Management System"} span={" System"} />
      </div>
       <div className="image-slider">
       <Carousel >
        
        <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2Fjava%2Fadminanel.png?alt=media&token=c3006d55-477f-46c2-ad7a-7a36efa43fa1'}/> 
        <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2Fjava%2Fhomejava.png?alt=media&token=8155b223-ccb1-447a-932b-eb8396f3d344'}/> 

           
          
        </Carousel>
        <div className="deatils">
          <DetailsSection 
          titel={"Vehicle Spare Part Management System"} 
          tech={"Used technologies"}
          t1={"💻 JAVA "}
          t2={"💻 JSP "}
          t3={"💻 MYSQL "}
          t4={"💻 Tomcat "}
        
    
          description ={"Project Description"}
          text1={
            "This was created as a first year university project focusing on supplier, spare part and user management, using the mvc architecture design pattern and we using my SQL as the database."
          }
          link={''}
          />
        </div>
       </div>

      

    </div>
  );
}

export default SparePartSystem;
