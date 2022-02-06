import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from '../Card';
import VideoCard from '../VideoCard';
import Tittle from "../../Components/Tittle";
import DetailsSection from '../../Components/DetailsSection';


function HotelLoop() {

   
  return(
    
    <div className='HotelLoop'>
       <div className="titel"> 
         <Tittle tittel={"Hotel Management System"} span={"Hotel Loop "} />
      </div>
       <div className="image-slider">
       <Carousel >
          
           <VideoCard video={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHotelLops%2F2022-02-01%2012-42-12.mp4?alt=media&token=2b017028-6263-4e9a-81fd-819aa21516e3'}/>
           
          
        </Carousel>
        <div className="deatils">
          <DetailsSection 
          titel={"Hotel Loop | Hotel Management System"} 
          tech={"Used technologies"}
          t1={"💻 MongoDB "}
          t2={"💻 Express(.js) "}
          t3={"💻 React(.js) "}
          t4={"💻 Node(.js) "}
          t5={"✉️ Emailjs "}
          description ={"Project Description"}
          text1={
            "This web based system is designed for hotel management. Focuses on customer, room, employee, supplier, and inventory management."
          }
          text2={
            "Customer Management - Allows  to collect, view, edit and delete customer information, as well as search by customer ID and name, and download reports. "
          }
          text3={
            "Room Management - The purpose is to enter room related information (by room type, bed price, Availability), delete edits and facilitate search download reports on Availability"
          }
          text4={
            "Employee Management - It facilitates the entry, updating, deletion of employee information as well as a percentage calculation of employee attendance and the availability of a related data report."
          }
          text5={
            "Supplier Management - It is possible to enter, update, delete and generate reports on supplier details and supplier order details. This section also includes the facility to easily email the stock manager to confirm receipt of the relevant goods."
          }
          text6={
            "Inventory Management  - facilitates the add, update, delete and generate reports on stock related information. This section also includes the facility to send an email to the supplier to facilitate the delivery of the relevant goods."
          }
          text7={
            "Event Management includes updates and deletions for weddings, meetings, and special events to be held at the hotel. It also has the ability to download data reports when needed."
          }

          link={"https://github.com/Lakshan555/Hotel-management-System"}
          />
        </div>
       </div>

      

    </div>
  );
}

export default HotelLoop;
