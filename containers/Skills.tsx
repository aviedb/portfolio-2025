import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import { skillsSection } from "../portfolio";

const DisplayLottie = dynamic(() => import("../components/DisplayLottie"), {
  ssr: false,
  loading: () => <div style={{ height: "300px" }} />
});

const Skills = () => {
  if (!skillsSection) return null;

  return (
    <Fade bottom duration={1000}>
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        {skillsSection.data.map((section, index) => {
          return (
            <Row className="mt-5" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <DisplayLottie animationPath="/lottie/coding.json" />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h3 className="h3 mb-2">{section.title}</h3>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  {section.softwareSkills.map((skill, i) => {
                    return (
                      <Fragment key={i}>
                        <div
                          className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                          id={skill.skillName.replace(/\s/g, "")}
                        >
                          <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                        </div>
                        <UncontrolledTooltip delay={0} placement="bottom" target={skill.skillName.replace(/\s/g, "")}>
                          {skill.skillName}
                        </UncontrolledTooltip>
                      </Fragment>
                    );
                  })}
                </div>
                <div>
                  {section.skills.map((skill, i) => {
                    return <p key={i}>{skill}</p>;
                  })}
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Fade>
  );
};

export default Skills;
