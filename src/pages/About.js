import React from "react";
import SkillSection from "../Components/SkillSection";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";
import design from '../img/design.svg';
import phone from '../img/phone.svg';


function About() {
  return (
    <div>
      <Tittle tittel={"About ME"} span={"About Me"} />
      <ImageSection />
      <Tittle tittel={"My Skills"} span={"My Skills"} />
      <div className="skill-container">
        <SkillSection skill={'React js(Class & function)'} progress ={'80%'} width={"80%"} />
        <SkillSection skill={'Java'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'C#'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'C++'} progress ={'75%'} width={"70%"} />
        <SkillSection skill={'Python'} progress ={'40%'} width={"40%"} />
        <SkillSection skill={'Node js'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'PHP'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'Java Script'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'Html'} progress ={'80%'} width={"80%"} />
        <SkillSection skill={'MySQL'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'Oracle SQL'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'MongoDb'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'Flutter'} progress ={'70%'} width={"70%"} />
        <SkillSection skill={'FireBase'} progress ={'70%'} width={"70%"} />
     
     </div>
      <div className="services-container">
        <div className="service-item1">
        <ServicesSection image={design} titel={'Full Stack Developer'} text={'Using MERN stack and JAVA I have the ability to set up crud operations and API on web based systems and create backends and frontend. I also develop JavaFX desktop applications.'}/>
        </div>
       
        <ServicesSection image={phone} titel={'Moblie Application Developer'} text={'I have the ability to create apps for Android and iOS, connect to databases, and create apps related to APIs. Experience with Java, React Native and Flutter.'}/>
      
      </div>
     
    </div>
  );

}

export default About;
