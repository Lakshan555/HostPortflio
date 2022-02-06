import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from '../Card';
import VideoCard from '../VideoCard';
import Tittle from "../../Components/Tittle";
import DetailsSection from '../../Components/DetailsSection';


function FlutterUi() {

   
  return(
    
    <div className='FlutterUi'>
       <div className="titel"> 
         <Tittle tittel={"Flutter UI"} span={"Flutter UI"} />
      </div>
       <div className="image-slider">
       <Carousel >
        
        <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FFlutter%2FGroup%201%20(3).png?alt=media&token=7b5c59c9-5d50-463d-bc62-d810ce603196'}/> 
        <VideoCard video={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FFlutter%2FFlutterUi1.mp4?alt=media&token=b4c6df14-9a9c-428a-b711-4a9912874cd0'}/>
        <VideoCard video={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FFlutter%2FFlutterUi.mp4?alt=media&token=be5fdce6-8238-4067-9129-d886eff5c6aa'}/>
        <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FFlutter%2FGroup%206%20(3).png?alt=media&token=12899069-7ec1-4089-9084-b681c4e50e94'}/> 
        <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FFlutter%2FGroup%207.png?alt=media&token=0226a5fe-4b10-4ac3-bac6-76da43c365ad'}/> 
           
          
        </Carousel>
        <div className="deatils">
          <DetailsSection 
          titel={"Flutter UI"} 
          tech={"Used technologies"}
          t1={"📱 Flutter "}
    
          description ={"Project Description"}
          text1={
            "These sample interfaces were created using flutter."
          }
          link={''}
          />
        </div>
       </div>

      

    </div>
  );
}

export default FlutterUi;
