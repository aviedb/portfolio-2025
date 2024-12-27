import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  if (!projects) return null;

  return (
    <Fade bottom duration={1000}>
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4 align-items-center">
            <div>
              <div className="icon icon-lg icon-shape bg-primary shadow rounded-circle text-white">
                <i className="ni ni-laptop text-white" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-primary mb-0">Key Projects</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {projects.map((data, i) => {
              return <ProjectsCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    </Fade>
  );
};

export default Projects;
