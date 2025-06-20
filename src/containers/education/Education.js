import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import EducationAnimation from "../../assets/lottie/Education.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1
          className="education-heading"
          style={{display: "flex", alignItems: "center", gap: "10px"}}
        >
          {educationInfo.title}
          <span className="education-lottie-container">
            <DisplayLottie animationData={EducationAnimation} />
          </span>
        </h1>
        <p className="experience-subtitle">{educationInfo.subtitle}</p>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
