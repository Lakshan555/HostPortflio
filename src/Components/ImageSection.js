import React from "react";
import about from "../img/about2.png";
import pdf from "../Files/Resume.pdf";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt=""  className="responsive-image"/>
      </div>

      <div className="about-info">
        <h4>
          I am <span>Ishanka Pramidu Lakshan</span>
        </h4>
        <p className="about-text">
          {" "}
          Software Engineering graduate from{" "}
          <span> Sri Lanka Institute of Information Technology (SLIIT)</span>,
          currently working as an Associate Software Engineer at OREL IT.{" "}
        </p>

        <div className="about-deatils">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages </p>
          </div>

          <div className="right-section">
            <p>: Dabarage Ishanka Pramidu Lakshan</p>
            <p>: 26</p>
            <p>: Sri Lanka</p>
            <p>: Sinhala,English</p>
          </div>
        </div>
        <div className="btn">
          <a className="cv-btn" href={pdf} download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
