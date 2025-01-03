import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import Fade from "react-reveal/Fade";

const Experience = () => {
  if (!experience) return null;

  return (
    <Fade bottom duration={1000}>
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4 align-items-center">
            <div>
              <div className="icon icon-lg icon-shape bg-primary shadow rounded-circle text-white">
                <i className="ni ni-briefcase-24 text-white" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-primary mb-0">Experience</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {experience.map((data, i) => {
              return <ExperienceCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    </Fade>
  );
};

export default Experience;
