import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ExperienceAnimation from "../../assets/lottie/Experiences.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1
                className="experience-heading"
                style={{display: "flex", alignItems: "center", gap: "10px"}}
              >
                {workExperiences.title}
                <span style={{width: "100px", height: "100px"}}>
                  <DisplayLottie
                    animationData={ExperienceAnimation}
                    height="40px"
                    width="40px"
                  />
                </span>
              </h1>

              <p className="experience-subtitle">{workExperiences.subtitle}</p>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
