import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from '../Card';
import VideoCard from '../VideoCard';
import Tittle from "../../Components/Tittle";
import DetailsSection from '../../Components/DetailsSection';


function ProcumentSystem() {

   
  return(
    
    <div className='ProcumentSystem'>
       <div className="titel"> 
         <Tittle tittel={"Procurement Management System"} span={"Procument "} />
      </div>
       <div className="image-slider">
       <Carousel >
          
           <VideoCard video={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2F2022-02-01%2010-17-15.mp4?alt=media&token=e70e2fce-3de9-41f6-9173-771864e5bd40'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FGroup%201%20(2).png?alt=media&token=fdd28231-cc2b-4953-8b81-35233d164e7a'}/> 
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocumanet2.png?alt=media&token=54d9882c-a10d-467b-b809-f3022f70febe'}/> 
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FBudgetDEa.png?alt=media&token=039d86d5-2544-447b-8d90-49b0529b589c'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FAdd%20Buget.png?alt=media&token=6265eb42-1326-4479-88c9-49300e427a0f'}/> 
           
          <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FSuplire%20Home.png?alt=media&token=37ad03ed-4814-41ab-8018-bb4ed5cec63d'}/> 
          <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FAddSuplier.png?alt=media&token=e453a5d4-eb6c-431e-912d-7bee574b327f'}/> 
          <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FItemDeatils.png?alt=media&token=5b1a6c6a-2c06-41a6-81d5-d58094f22753'}/> 
          
           
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FRequsetionHome.png?alt=media&token=0c979195-0b2e-4891-8c71-dbce0769c894'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FNewReqestions.png?alt=media&token=51213a39-7daf-4c39-8e1b-a01ff08371f1'}/> 
           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FViewRequestion.png?alt=media&token=e0f29dc5-afb4-4836-85a1-9b3dad35fd90'}/> 

           <Card number={' https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FOrder.png?alt=media&token=8e6e3ec3-b88d-4f00-8a2e-4524c635e6a3'}/> 
          
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FDeliveryespng.png?alt=media&token=99d85a2d-0573-490e-804b-f189c26b1c04'}/> 
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FUpdateDelivery.png?alt=media&token=00201eaf-2a26-4d12-a636-2b805c5cef1c'}/> 
           
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FInvoice.png?alt=media&token=216d69ef-fbd0-4c49-a4a3-113a97cfb0b6'}/> 
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2FViewInvoce.png?alt=media&token=5e160c53-1cd3-442d-95a1-43c8c332d160'}/> 
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FPocment%2Fhome.jpeg?alt=media&token=77ed71b7-dada-4969-b2a1-50699a192584'}/> 
          
        </Carousel>
        <div className="deatils">
          <DetailsSection 
          titel={"Procurement Management System"} 
          tech={"Used technologies"}
          t1={"💻 MongoDB "}
          t2={"💻 Express(.js) "}
          t3={"💻 React(.js) "}
          t4={"💻 Node(.js) "}
          t5={"📱 Flutter "}
          description ={"Project Description"}
          text1={
            "Developed a web-based and mobile application based on case study needs with mathematical calculations. Budget, Supplier handling, Requestionshandling, Invoices, delivery management was done through this. "
          }
          text2={
            "Supplier management -It provides access to providers' information, updates, deletions, and searches for their details, as well as the ability to download reports."
          }
          text3={
            "Budget management. -Facilitates budget allocation for each sector in budget management. It also makes the required data easy to find."
          }
          text4={
            "Requisition management- Requests sent through the Site Manager mobile application are displayed in the admin panel. The purpose is to approve them and control the flow of stocks according to the budget allocated for each sector. "
          }
          text5={
            "Order management-Here you can see all the orders approved by requisition based on their status. It also provides the facility to download the required data as a report."
          }
          text6={
            "Delivery management-It provides the details regarding the delivery of the ordered goods. It also provides the facility to download the required data as a report"
          }
          text7={
            "Invoice management -Details about all the accessories for providers are included here.. It also provides the facility to download the required data as a report and also can search data based on order id."
          }
         
          />
        </div>
       </div>

      

    </div>
  );
}

export default ProcumentSystem;
