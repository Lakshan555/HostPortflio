import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from '../Card';
import VideoCard from '../VideoCard';
import Tittle from "../../Components/Tittle";
import DetailsSection from '../../Components/DetailsSection';


function BocApp() {

   
  return(
    
    <div className='BocApp'>
       <div className="titel"> 
         <Tittle tittel={"BOC Online Mobile Banking App"} span={"Mobile Banking"} />
      </div>
       <div className="image-slider">
       <Carousel >
        
        <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FFlutter%2FGroup%203%20(1).png?alt=media&token=d3a2f7b5-7e7f-4766-acf4-b8eea578309d'}/> 
        <VideoCard video={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2F2022-02-01%2014-22-05.mp4?alt=media&token=42d416c8-e231-4e12-b8ad-46a0ecc1fdf6'}/>
           
          
        </Carousel>
        <div className="deatils">
          <DetailsSection 
          titel={"BOC Online Mobile Banking App"} 
          tech={"Used technologies"}
          t1={"📱 Flutter "}
          t2={"📱 FireBase "}
    
          description ={"Project Description"}
          text1={
            "This is a project for a third year subject in the university, which aims to modify an existing app by modifying the UI on the user's user experience and re-creating it for iOS and Android phones. This is based on an existing banking transaction app and is designed for a completely educational purpose. "
          }
          link={'https://github.com/Lakshan555/BOC_Mobile_App'}
          />
        </div>
       </div>

      

    </div>
  );
}

export default BocApp;
