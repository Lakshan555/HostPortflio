import React from 'react';
import Carousel from 'react-elastic-carousel'
import Card from '../Card';
import VideoCard from '../VideoCard';
import Tittle from "../../Components/Tittle";
import DetailsSection from '../../Components/DetailsSection';


function Iclass() {

   
  return(
    
    <div className='Iclass'>
       <div className="titel"> 
         <Tittle tittel={"Class Management Android Application"} span={"IClass"} />
      </div>
       <div className="image-slider">
       <Carousel >
        
        <Card number={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FAndroid%2FGroup%209.png?alt=media&token=2c8a1dc3-52ae-42f1-8ba4-5406062c3098'}/> 
        <VideoCard video={'https://firebasestorage.googleapis.com/v0/b/isha-fea30.appspot.com/o/Portfolio%2FAndroid%2F2022-02-05%2012-16-44.mp4?alt=media&token=b22a914b-f661-450c-92fe-06bf8350d42e'}/>
           
          
        </Carousel>
        <div className="deatils">
          <DetailsSection 
          titel={"Class Management Android Application"} 
          tech={"Used technologies"}
          t1={"📱 Java "}
          t2={"📱 FireBase "}
    
          description ={"Project Description"}
          text1={
            "“I-Class” project was designed using the android studio. Mockups online tool was used to create the wireframes and snipping tool was used to take snips of wireframes. "
          }
          text2={
              "This app is most suitable to get information about the online classes where the students seek help to find suitable classes in their students' lives. Students will be benefited even in the physical classes that teachers use this process to informing them about postpones and changes of the classes. So that, they will not waste time by mere attempts. Not only that when sudden causes prevailed such as Covid pandemic, but the live classes also can't be held and there is no proper communication between teachers and students. Teachers try their best to teach students online to cover the syllabus and prepare them for the examination. But there will be an issue as the students can't access to exact time to move with. The purpose of this mobile application is to build virtual communication between teachers and students due to the lack of physical connection between them. So that, they will not waste time by mere attempts. This mobile application is created to facilitate the teachers' and students' relationship to communicate easily through online classrooms, especially for far away from students. First, teachers and students have to register in the application by entering valid user credentials. Teachers create classrooms by including such details as subject, date, time, class, and password. Students get the opportunity to join in the particular classroom when logging in to the system. Both the teachers and students can view the participants of each class. The teacher can put any notice about each class such as changing class times or dates, or the teacher can add further reference materials relevant to each subject in the notices. So, students will aware of updated time periods of the lessons easily. The teachers will update or delete their notices if they want to change or cancel any lesson details. If the particular user wants to add a note about classes or any other essential facts he can take a note through the mobile application. Users too update or delete their notes in need of change or cancel that particular information."
          }
          link={'https://github.com/Lakshan555/MAD_Project_Dracaris'}
          />
        </div>
       </div>

      

    </div>
  );
}

export default Iclass;