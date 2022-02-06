import React from "react";

function SkillSection({ skill, progress,width }) {
  return (
    <div className="Skills-Section">
      <div className="skills-container">
        <h5 className="skills-titel">{skill}</h5>

        <div className="skill-bar">
          <p className="skill-text">{progress}</p>
          <div className="skill-progress">
              <div className="progress">
                  <div className="inner-progess" style={{width:width}}>


                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
