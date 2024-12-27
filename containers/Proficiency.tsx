import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import dynamic from "next/dynamic";

const DisplayLottie = dynamic(() => import("../components/DisplayLottie"), {
  ssr: false,
  loading: () => <div style={{ height: "300px" }} />
});

const Proficiency = () => {
  if (!SkillBars) return null;

  return (
    <Container className="section section-lg">
      <Fade bottom duration={1000}>
        <Row>
          <Col lg="6">
            <h1 className="h1">Proficiency</h1>
            {SkillBars.map(skill => {
              return (
                <div className="progress-primary" key={skill.Stack}>
                  <div className="progress-label">
                    <span>{skill.Stack}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.progressPercentage}
                    color="primary"
                    role="progressbar"
                    aria-label={skill.Stack}
                  />
                </div>
              );
            })}
          </Col>
          <Col lg="6">
            <DisplayLottie animationPath="/lottie/build.json" />
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Proficiency;
