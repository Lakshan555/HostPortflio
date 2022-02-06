import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from '../Card';
import VideoCard from '../VideoCard';
import Tittle from "../../Components/Tittle";
import DetailsSection from '../../Components/DetailsSection';


function HighGarden() {

   
  return(
    
    <div className='HighGarden'>
       <div className="titel"> 
         <Tittle tittel={"High Garden | Restaurant Management System"} span={"High Garden "} />
      </div>
       <div className="image-slider">
       <Carousel >
          
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F1.jpg?alt=media&token=24bbe09f-026e-402c-a3cf-c1e99eb06832'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F2.jpg?alt=media&token=f6bc21ea-6125-4437-b012-b9d38bc5a220'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F3.png?alt=media&token=0256ffa0-f831-42e9-bad5-6d0868250bf6'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F4.jpg?alt=media&token=2e7a4de3-1fc9-47de-8924-9229d7a1a3df'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F5.jpg?alt=media&token=25b49497-33d3-464a-9b93-e8cb19db5b27'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F6.jpg?alt=media&token=aa63cdb7-2b3b-4557-abb9-40470a669257'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F7.jpg?alt=media&token=0580e050-4414-401a-a220-1e72a4ef8310'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F13.jpg?alt=media&token=691a3527-c3d1-4337-b986-51aeea8af54d'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F16.jpg?alt=media&token=d9cc41d8-03a8-4233-8849-dad615fe3b1d'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F17.jpg?alt=media&token=870a677d-80e6-4d15-afb5-7feb5f7cb885'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F18.jpg?alt=media&token=53199f42-2a23-4b1e-ad77-fa488820fdcd'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F19.jpg?alt=media&token=84433d0a-e34e-474f-b586-75398d85fbb7'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F20.jpg?alt=media&token=c35b20e8-aefb-46fb-a3a5-93e6c7f3dcc8'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F22.png?alt=media&token=83f5e44a-8f5a-4e94-840f-21bc39dc5f6f'}/>
           <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FHighgraden%2F25.png?alt=media&token=093d0ce2-1965-4cfc-a52c-ace5b9bb0447'}/>
           
          
        </Carousel>
        <div className="deatils">
          <DetailsSection 
          titel={"High Garden | Restaurant Management System"} 
          tech={"Used technologies"}
          t1={"💻 MongoDB "}
          t2={"💻 Express(.js) "}
          t3={"💻 React(.js) "}
          t4={"💻 Node(.js) "}
          t5={"✉️ Emailjs "}
          description ={"Project Description"}
          text1={
            "“High garden” is a well-known restaurant situated in Homagama town. Since 2018 have they made a unique identity for themselves among the industry for their authentic cuisine and customer satisfaction. In 2020 they decided to expand their business and upgraded their business in 2021 as a large-scale restaurant including delivery services and reservation services to provide better service to their customers. Therefore, the owner of the restaurant has been working towards getting a web application. Accordingly, we negotiated with them on our behalf and came up with an agreement to create an online restaurant management system tailored to their needs."
          }
          text2={
            "A restaurant Management System helps to monitor the management information, their products, and services. Restaurant Management System helps in competitive advantage as well as cost savings. It aims to increase efficiency by effectively managing processes such as identifying each type of customer, taking orders for them, inventory, Employee, Attendance and leave, Finance, Supplier, Reservation, and performance/quality monitoring. The ultimate objective is to consider the use of the right resource at the right place, at the right time."
          }
          text3={
            "Previously the restaurant used only a cashier system and they took the pre orders over the phone and billed them manually. That was a nonefficient and time-consuming process and its crucial for the sales. That problem can be solved via using the Order management system which is a sub – component of the Restaurant Management System. Customers can place orders from the web application. They have the freedom to select their orders and the order method (Delivery or Take-away) and also can view their past orders. The restaurant staff can easily manage the orders they receive and can provide efficient service to the customers by using the Order management system."
          }
          text4={
            "The inventory control system follows First-In-First-Out (FIFO) method, which gives the priority to the quality of the product. To be more efficient in inventory, this web application stores all the records about existing, cancelled and used stocks and indicates special information about stocked items to the user in a user-friendly interface. The special feature here is the alert message service. If a particular stock item is lesser than the expected value, an email is sent to the inventory manager."
          }
          text5={
            "Previously, employee payments, recruitment of new employees and adding the employee details were recorded manually. After the growth of the business, it was difficult to keep track of employee increments and employee data, therefore employee management system was introduced to facilitate their needs. Accordingly, the main purpose of employee management in the restaurant management system is to provide information about employees details such as types of services, salaries etc."
          }
          text6={
            "Attendance and leave management concerns marking the employees’ attendance accurately with the time and date. This function adds leave and generates reports. Also, it collaborates with the employee management system of the restaurant. Previously this restaurant's finance was managed by a handwritten ledger system. So, clients had difficulties about keeping tracks of income and expenses of the restaurant. Based on the high number of transactions per day, it was very difficult and inconvenient to maintain a manual ledger system. Through the Finance management System of the Restaurant management system that problem can be solved. This is very important because it will be more efficient and accurate in keeping records and it will be a more scalable and reliable system. The finance system can be used to keep track of employee salary and supplier cost as well. Therefore, the client can easily get a financial report of the restaurant for a given period. "
          }
          text7={
            "The Supplier Management System of this web application manages all the supplier details such as adding new suppliers, deleting suppliers, and updating supplier details. It is inconvenient to store all the supplier details physically. Therefore, it can be further developed to store all the records of the new suppliers and update current information of the system. Reservation advertisement management system is a new feature which will be introduced by the new system. By using this feature customers can reserve tables as they need for their occasions for the selected time period. It will be another reason to uplift the customer satisfaction. Also, by using advertisement management restaurant can introduce special offers, promotions, today’s special menus, etc. to their customers."
          }
          text8={
            "Managing delivery is a key task for successful completion of the order. It requires the store details such as the driver and the vehicle. After receiving the order, details will be transferred to the delivery process. Then the delivery manager will accept the order and assign it, based on the availability of drivers and vehicle. Finally, the order will be delivered to the customer."
          }

          link={"https://github.com/Lakshan555/Restaurent-Management-System"}
          />
        </div>
       </div>

      

    </div>
  );
}

export default HighGarden;
