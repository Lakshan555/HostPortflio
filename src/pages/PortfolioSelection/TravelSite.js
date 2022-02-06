import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from '../Card';
import VideoCard from '../VideoCard';
import Tittle from "../../Components/Tittle";
import DetailsSection from '../../Components/DetailsSection';


function TravelSite() {

    // const breakPoint = [
    //     {width:500,itemToShow:1},
    //     {width:768,itemToShow:2},
    //     {width:1200,itemToShow:3},
    //     {width:1500,itemToShow:4}
    // ];
   
  return(
    
    <div className='TravelSite'>
       <div className="titel"> 
         <Tittle tittel={"Travel Agency Management System"} span={"Travel Agency "} />
      </div>
       <div className="image-slider">
       <Carousel >
          
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FGroup%201%20(1).png?alt=media&token=59713c2c-9196-401b-ac0e-aaf134ae8961'}/> 
           <VideoCard video={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2F2022-01-31%2016-36-44.mp4?alt=media&token=e4ca19a0-74ea-4c11-a7fb-6d59965ed64f'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2Fadmin.png?alt=media&token=9b77653c-3d4a-4f24-9090-1bf50eff93cd'}/> 
           <VideoCard video={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2F2022-01-31%2018-43-42.mp4?alt=media&token=a5be20ef-1906-4e55-a60d-4cf8f1b2d746'}/>
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FGuideHome.png?alt=media&token=45a9304b-acdb-46eb-a197-63ce8c96d77c'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FaddGuide.jpeg?alt=media&token=0f1e661a-c9b4-4fdc-b9e6-49e2c4292992'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FUpdateGude.jpeg?alt=media&token=74ab2c5f-3b50-4751-aeb7-6b6240f8a181'}/> 
           
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FAcc%20%40%20Room.png?alt=media&token=15843f0c-af40-47bd-a0bc-fcd1ac100f7d'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FAccomadion.png?alt=media&token=01cb691e-d264-424d-b0b0-0fffb157277c'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FAddAcomadions.png?alt=media&token=f1b7e1d9-b7a4-45f3-aa94-19d3b6443edc'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FRoom.png?alt=media&token=b635751e-28be-4d4e-9bf8-a33d6e632a16'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FaddRoom.png?alt=media&token=d5d51c4a-d5d9-434b-ba0e-97247748210e'}/> 
          
        </Carousel>
        <div className="deatils">
          <DetailsSection 
          titel={"Travel Agency Management System"} 
          tech={"Used technologies"}
          t1={"💻 MongoDB "}
          t2={"💻 Express(.js) "}
          t3={"💻 React(.js) "}
          t4={"💻 Node(.js) "}
          t5={"💻 FireBase "}
          description ={"Project Description"}
          text1={
            "This project is about a travel management system which can be used by travel agencies to manage and promote their services online. They can use this to attract more customers by using this system. Using the admin dashboard, owner/manager can manage travel destinations, accommodations, tour guides and travel vehicles of their company. Using the web application, users can view all those details so that they can plan their upcoming trips easily. Further, they can book services as they wish using the information that are available in the web application. "
          }
          text2={
            "Travel Destinations/Locations Management – This function adds, displays, updates and delete details of the travel destinations. Admin can manage these details easily and users of the website can make their travel choices efficiently via the website "
          }
          text3={
            "Tourist Guides Management - The purpose of this section is to incorporate the route consultants who work for the travel agencies that obtained this travel management system and make the information available online to any traveler. Thus, travelers can book route guides from their preferred area and depending on the language."
          }
          text4={
            "Travel Accommodation Management – The people who gain the services from the system can able to search accommodations (hotel, guest house, apartments etc.) anywhere in the country according to their preference. And also, the system allows the manager to maintain the details of the accommodations(Add, Display, Delete, Update and Search)."
          }
          text5={
            "Transport and Vehicles Management – In this function, users can see, and get all the details of the transport services available on the routes they want to visit. Admin can manage all the transport and vehicle details."
          }

          link={"https://github.com/pasindubhasura/TravelApp"}
          />

        </div>
       </div>

      

    </div>
  );
}

export default TravelSite;
